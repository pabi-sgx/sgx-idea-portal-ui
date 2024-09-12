import { Routes } from '@angular/router';
import { RegistrationComponent } from './featured/components/registration/registration.component';
import { IdeasListComponent } from './featured/components/ideas-list/ideas-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/ideas-list', pathMatch: 'full' },
    { path: 'registration', component: RegistrationComponent },
    { path: 'ideas-list', component: IdeasListComponent }
];
