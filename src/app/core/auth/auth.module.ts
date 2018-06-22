import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { CoreModule } from '../core.module';
import { AuthComponent } from './auth.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

export const appRoutes: Routes = [{
    path: '', component: AuthComponent, children: [
        { path: 'dashboard', loadChildren: '../../components/dashboard-crm/dashboard-crm.module#DashboardCrmModule' },
        {
            path: 'dashboard-account',
            loadChildren: '../../components/dashboard-accounts/dashboard-accounts.module#DashboardAccountsModule'
        },
        { path: 'material-widgets', loadChildren: '../../components/material-widgets/material-widgets.module#MaterialWidgetsModule' },
        { path: 'tables', loadChildren: '../../components/tables/tables.module#TablesModule' },
        { path: 'maps', loadChildren: '../../components/maps/maps.module#MapsModule' },
        { path: 'charts', loadChildren: '../../components/charts/charts.module#ChartsModule' },
        { path: 'mail', loadChildren: '../../components/mail/mail.module#MailModule' },
        { path: 'features', loadChildren: '../../features/features.module#FeaturesModule' },
        { path: 'forms', loadChildren: '../../components/forms/forms.module#FormModule' },
        { path: 'guarded-routes', loadChildren: '../../components/guarded-routes/guarded-routes.module#GuardedRoutesModule' },
        { path: 'editor', loadChildren: '../../components/editor/editor.module#EditorModule' },
        { path: 'scrumboard', loadChildren: '../../components/scrumboard/scrumboard.module#ScrumboardModule' }
    ]
}];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(appRoutes),
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        CoreModule,
        MatSidenavModule,
        PerfectScrollbarModule
    ],
    declarations: [AuthComponent],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ]
})
export class AuthModule { }
