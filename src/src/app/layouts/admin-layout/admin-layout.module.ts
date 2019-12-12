import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';
import { MarkdownModule } from 'ngx-markdown';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { RuthComponent } from '../../ruth/ruth.component';
import { Genisis1and2Component } from '../../genisis1and2/genisis1and2.component';
import { Leviticus23Component } from '../../leviticus23/leviticus23.component';
import { TenCommandmentsComponent } from '../../ten-commandments/ten-commandments.component';
import { TheTribeComponent } from '../../the-tribe/the-tribe.component';
import { ActsComponent } from '../../acts/acts.component';

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
    ActsComponent
  ]
})

export class AdminLayoutModule {}
