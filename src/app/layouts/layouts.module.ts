import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './empty/empty.component';
import { DefaultComponent } from './default/default.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { LayoutsRoutingModule } from './layouts-routing.module';

@NgModule({
    declarations: [
        EmptyComponent,
        DefaultComponent
    ],
    imports: [
        CommonModule,
        NzLayoutModule,
        NzIconModule,
        NzMenuModule,
        LayoutsRoutingModule
    ]
})
export class LayoutsModule {
}
