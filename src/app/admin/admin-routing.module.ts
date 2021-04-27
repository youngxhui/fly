import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { ToolComponent } from './tool/tool.component';
import { PeopleCreateComponent } from './people-create/people-create.component';
import { ToolCreateComponent } from './tool-create/tool-create.component';

const routes: Routes = [
    {path: '', redirectTo: 'people'},
    {path: 'people', component: PeopleComponent},
    {path: 'tool', component: ToolComponent},
    {path: 'people-create', component: PeopleCreateComponent},
    {path: 'tool-create', component: ToolCreateComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
