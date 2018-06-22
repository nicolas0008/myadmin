import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './example.component';

const routes: Routes = [
    { path: '', component: ExampleComponent, children: [
        { path: ':id', component: ExampleComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRouterModule { }