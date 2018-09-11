

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DifficultLevelComponent } from './difficult-level/difficult-level.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'difficultLevel', component: DifficultLevelComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
