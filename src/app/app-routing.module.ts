import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/welcome'},
    {path: 'welcome', loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule)}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
