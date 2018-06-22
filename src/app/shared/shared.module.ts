import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleSandbox } from './sandbox/example.sandbox';
import { AppStoreModule } from '../store/store.module';

@NgModule({
    imports: [
        CommonModule,
        AppStoreModule
    ],
    declarations: [],
    providers: [
        ExampleSandbox
    ],
    exports: [
        AppStoreModule
    ]
})
export class SharedModule { }
