import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'auth', loadChildren: '../../shared/auth/auth.module#AuthModule' },
    { path: 'register', loadChildren: '../../shared/register/register.module#RegisterModule' },
    { path: 'login', loadChildren: '../../shared/pages/login/login.module#LoginModule' },
    // {path: 'editor', loadChildren: '../../shared/editor/editor.module#EditorModule'},

    { path: '**', redirectTo: 'login' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class LazyLoadModule { }
