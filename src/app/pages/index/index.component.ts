import { Component, OnInit } from '@angular/core';
import { Status, Tool } from '../../../proto/tool.pb';
import { UserServiceClient } from '../../../proto/auth.pbsc';
import { LoginUserRequest, LoginUserResponse } from '../../../proto/auth.pb';
import { ToolService } from '../../service/tool.service';
import { Wear } from '../../../proto/wear.pb';


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
        // 序列化
        const wear = new Wear();
        wear.date = '123';
        wear.loss = 0.2;
        wear.toolId = 1;
        wear.id = 2;
        const uint8Array = wear.serializeBinary();
        console.log(uint8Array);


        const wear1 = Wear.deserializeBinary(uint8Array);
        console.log(wear1);
    }

}
