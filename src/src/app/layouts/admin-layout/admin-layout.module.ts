import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';
import { MarkdownModule } from 'ngx-markdown';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../lesson1/home/home.component';
import { RuthComponent } from '../../lesson1/ruth/ruth.component';
import { Genisis1and2Component } from '../../lesson1/genisis1and2/genisis1and2.component';
import { Leviticus23Component } from '../../lesson1/leviticus23/leviticus23.component';
import { TenCommandmentsComponent } from '../../lesson2/ten-commandments/ten-commandments.component';
import { TheTribeComponent } from '../../lesson2/the-tribe/the-tribe.component';
import { ActsComponent } from '../../lesson2/acts/acts.component';
import { ShabbatComponent } from '../../lesson3/shabbat/shabbat.component';
import { HavdalahComponent } from '../../lesson3/havdalah/havdalah.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    MarkdownModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    RuthComponent,
    Genisis1and2Component,
    Leviticus23Component,
    TenCommandmentsComponent,
    TheTribeComponent,
    ActsComponent,
    ShabbatComponent,
    HavdalahComponent
  ]
})

export class AdminLayoutModule {}
