import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedZorroModule } from './shared-zorro.module';


@NgModule({
    declarations: [],
    imports: [CommonModule, ...sharedZorroModule],
    exports: [...sharedZorroModule],
})
export class SharedModule {
}
