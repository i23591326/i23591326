import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Section1Component} from './section1/section1.component';

const routes: Routes = [
  {path: '', redirectTo: 'section1', pathMatch: 'full'},
  {path: 'section1', component: Section1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
