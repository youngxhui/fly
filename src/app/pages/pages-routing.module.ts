import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RealTimeComponent } from './real-time/real-time.component';
import { ToolDetailComponent } from './tool-detail/tool-detail.component';

const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: IndexComponent},
    {path: 'real', component: RealTimeComponent},
    {path: 'detail/:id', component: ToolDetailComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {
}
