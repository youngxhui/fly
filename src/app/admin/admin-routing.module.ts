import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { ToolComponent } from './tool/tool.component';

const routes: Routes = [
    {path: '', redirectTo: 'people'},
    {path: 'people', component: PeopleComponent},
    {path: 'tool', component: ToolComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
