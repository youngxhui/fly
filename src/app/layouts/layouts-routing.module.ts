import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { EmptyComponent } from './empty/empty.component';

const routes: Routes = [
    {
        path: '', component: DefaultComponent, children: [
            {path: '', loadChildren: () => import('../pages/pages.module').then(m => m.PagesModule)}
        ]
    },
    {path: 'login', component: EmptyComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutsRoutingModule {
}
