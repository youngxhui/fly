import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../shared/shared.module';
import { RealTimeComponent } from './real-time/real-time.component';
import { ToolDetailComponent } from './tool-detail/tool-detail.component';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
    declarations: [
        IndexComponent,
        RealTimeComponent,
        ToolDetailComponent,
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        SharedModule,
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts')
        })
    ]
})
export class PagesModule {
}
