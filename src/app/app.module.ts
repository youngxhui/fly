import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { GrpcCoreModule } from '@ngx-grpc/core';
import { GrpcWebClientModule } from '@ngx-grpc/grpc-web-client';
import { environment } from '../environments/environment';
import { GrpcMessage } from '@ngx-grpc/common';
import { ServiceWorkerModule } from '@angular/service-worker';

registerLocaleData(zh);


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        IconsProviderModule,
        GrpcCoreModule.forRoot(),
        GrpcWebClientModule.forRoot({
            settings: {
                host: 'http://127.0.0.1:8000',
                // @ts-ignore
                enabled: localStorage.getItem('logger') === 'true' || !environment.production,
                requestMapper: (msg: GrpcMessage) => msg.toProtobufJSON(),
                responseMapper: (msg: GrpcMessage) => msg.toProtobufJSON(),
            }
        }),
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the app is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        })
    ],
    providers: [{provide: NZ_I18N, useValue: zh_CN}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
