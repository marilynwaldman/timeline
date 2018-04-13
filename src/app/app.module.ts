import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmailsComponent } from './emails/emails.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NavbarComponent } from './navbar/navbar.component';
import { routes } from './app.routes';
import { D3forceComponent } from './d3force/d3force.component';
import { D3Service, D3_DIRECTIVES } from './d3force/d3';


import { GraphComponent } from './d3force/visuals/graph/graph.component';
import { SHARED_VISUALS } from './d3force/visuals/shared';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmailsComponent,
    DashboardComponent,
    NavbarComponent,
    D3forceComponent,
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
