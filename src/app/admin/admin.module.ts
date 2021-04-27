import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PeopleComponent } from './people/people.component';
import { ToolComponent } from './tool/tool.component';
import { SharedModule } from '../shared/shared.module';
import { PeopleCreateComponent } from './people-create/people-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolCreateComponent } from './tool-create/tool-create.component';


@NgModule({
    declarations: [
        PeopleComponent,
        ToolComponent,
        PeopleCreateComponent,
        ToolCreateComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class AdminModule {
}
