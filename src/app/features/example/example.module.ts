import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ExampleRouterModule } from './example.routes';
import { ExampleComponent } from './example.component';
import { ExampleSandbox } from '../../shared/sandbox/example.sandbox';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ExampleRouterModule
    ],
    declarations: [ExampleComponent],
    providers: [ExampleSandbox],
    exports: [ExampleComponent]
})
export class ExampleModule { }
