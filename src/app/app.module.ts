import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './component/layout/layout.component';
import { NavbarComponent } from './component/layout/navbar/navbar.component';
import { SidebarComponent } from './component/layout/sidebar/sidebar.component';
import { AsideComponent } from './component/layout/aside/aside.component';
import { StrategyMapsComponent } from './component/strategy-maps/strategy-maps.component';
import { PerspectivesComponent } from './component/strategy-maps/perspectives/perspectives.component';
import { ObjectivesComponent } from './component/strategy-maps/objectives/objectives.component';
import { HttpClientModule } from '@angular/common/http';
import { DecimalPipe, NgFor } from '@angular/common';
import { CommentsComponent } from './component/comments/comments.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    SidebarComponent,
    AsideComponent,
    StrategyMapsComponent,
    PerspectivesComponent,
    ObjectivesComponent,
    CommentsComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
