import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';

const pagesRoutes: Routes = [
    { path: 'contact', component: ContactComponent, data: { animation: 'contact' } },
    { path: 'about', component: AboutComponent, data: { animation: 'about' } },
    { path: 'services', component: ServicesComponent, data: { animation: 'services' } },
    { path: 'example', loadChildren: './example/example.module#ExampleModule' }
];

@NgModule({
    imports: [
        RouterModule.forChild(pagesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class FeaturesRouterModule { }