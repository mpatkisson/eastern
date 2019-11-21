import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { RuthComponent } from '../../ruth/ruth.component';
import { Genisis1and2Component } from '../../genisis1and2/genisis1and2.component';
import { Leviticus23Component } from '../../leviticus23/leviticus23.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'home',      component: HomeComponent },
    { path: 'ruth',      component: RuthComponent },
    { path: 'genesis_1-2',      component: Genisis1and2Component },
    { path: 'leviticus_23',      component: Leviticus23Component }
];
