import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { RuthComponent } from '../../ruth/ruth.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'home',      component: HomeComponent },
    { path: 'ruth',      component: RuthComponent },
];
