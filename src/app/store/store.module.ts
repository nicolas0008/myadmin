import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ExampleEffects } from './example/example.effects';

import { reducers, metaReducers } from '.';

import { environment } from '../../environments/environment';
import { HttpService } from '../core/http/http.service';
import { ExampleSandbox } from '../shared/sandbox/example.sandbox';
import { ExampleHTTPService } from '../core/http/example.service';


@NgModule({
    imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreRouterConnectingModule,
        !environment.production ? StoreDevtoolsModule.instrument({maxAge: 50}) : [],
        EffectsModule.forRoot([
            ExampleEffects
        ])
    ],
    exports: [],
    declarations: [],
    providers: [
        HttpService,
        ExampleSandbox,
        ExampleHTTPService
    ]
})
export class AppStoreModule { }
