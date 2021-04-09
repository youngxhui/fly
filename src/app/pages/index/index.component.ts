import { Component, OnInit } from '@angular/core';
import { Status, Tool } from '../../../proto/tool.pb';

interface Person {
    key: string;
    name: string;
    age: number;
    address: string;
}

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

    tools: Tool[] = new Array<Tool>();
    status = [Status.Health, Status.Damage, Status.Waring];

    constructor() {
    }

    ngOnInit(): void {
        for (let i = 0; i < 12; i++) {
            const tool = new Tool();
            tool.id = i;
            tool.machineId = i;
            tool.status = this.status[i % 3];
            this.tools.push(tool);
        }
    }

}
