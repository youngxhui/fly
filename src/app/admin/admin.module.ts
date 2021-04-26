import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PeopleComponent } from './people/people.component';
import { ToolComponent } from './tool/tool.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        PeopleComponent,
        ToolComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule
    ]
})
export class AdminModule {
}
