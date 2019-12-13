import { Routes } from '@angular/router';

import { HomeComponent } from '../../lesson1/home/home.component';
import { RuthComponent } from '../../lesson1/ruth/ruth.component';
import { Genisis1and2Component } from '../../lesson1/genisis1and2/genisis1and2.component';
import { Leviticus23Component } from '../../lesson1/leviticus23/leviticus23.component';
import { TenCommandmentsComponent } from '../../lesson2/ten-commandments/ten-commandments.component';
import { TheTribeComponent } from '../../lesson2/the-tribe/the-tribe.component';
import { ActsComponent } from '../../lesson2/acts/acts.component';
import { ShabbatComponent } from '../../lesson3/shabbat/shabbat.component';
import { HavdalahComponent } from '../../lesson3/havdalah/havdalah.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'ruth', component: RuthComponent },
    { path: 'genesis_1-2', component: Genisis1and2Component },
    { path: 'leviticus_23', component: Leviticus23Component },
    { path: 'ten-commandments', component: TenCommandmentsComponent },
    { path: 'the-tribe', component: TheTribeComponent },
    { path: 'acts', component: ActsComponent },
    { path: 'shabbat', component: ShabbatComponent },
    { path: 'havdalah', component: HavdalahComponent }
];
