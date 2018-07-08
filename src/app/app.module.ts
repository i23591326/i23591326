import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatCardModule, MatMenuModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WhateverDataTableComponent } from './section1/whatever-data-table/whatever-data-table.component';
import { WhateverDashboardComponent } from './section1/whatever-dashboard/whatever-dashboard.component';
import { Section1Component } from './section1/section1.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    WhateverDataTableComponent,
    WhateverDashboardComponent,
    Section1Component
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
