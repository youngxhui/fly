import { Component, OnInit } from '@angular/core';
import { ToolService } from '../../service/tool.service';
import { Status, Tool } from '../../../proto/tool.pb';

@Component({
    selector: 'app-tool',
    templateUrl: './tool.component.html',
    styleUrls: ['./tool.component.less']
})
export class ToolComponent implements OnInit {

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
    }

}
