import { Component, OnInit } from '@angular/core';
import { Status, Tool } from '../../../proto/tool.pb';
import { UserServiceClient } from '../../../proto/auth.pbsc';
import { LoginUserRequest, LoginUserResponse } from '../../../proto/auth.pb';
import { ToolService } from '../../service/tool.service';


@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

    tools: Tool[] = new Array<Tool>();
    status = [Status.Health, Status.Damage, Status.Waring];
    page = 1;
    size = 10;

    constructor(private toolService: ToolService) {
    }


    ngOnInit(): void {
        this.toolService.list(this.page, this.size).subscribe(
            next => {
                this.tools = next.tools;
            }
        );
        //
        // for (let i = 0; i < 12; i++) {
        //     const tool = new Tool();
        //     tool.id = i;
        //     tool.machineId = i;
        //     tool.status = this.status[i % 3];
        //     this.tools.push(tool);
        // }
    }

}
