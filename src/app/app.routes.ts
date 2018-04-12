


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { EmailsComponent } from './emails/emails.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent, children: [
      {path: '', component: NavbarComponent, children: [
          {path: 'dashboard', component: DashboardComponent},
          {path: 'emails', component: EmailsComponent},
        
      ]}
  ]},
];

export const routes = RouterModule.forRoot(appRoutes, {useHash: false});
 