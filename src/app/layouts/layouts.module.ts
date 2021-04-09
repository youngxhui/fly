import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './empty/empty.component';
import { DefaultComponent } from './default/default.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        EmptyComponent,
        DefaultComponent
    ],
    exports: [
        EmptyComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        LayoutsRoutingModule,
        ReactiveFormsModule
    ]
})
export class LayoutsModule {
}
