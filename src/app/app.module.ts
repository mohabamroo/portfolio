import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';

import { ParticlesModule } from 'angular-particle';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    LandingComponent,
    ProjectsComponent,
    ProjectsListComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, RouterModule, AppRoutingModule, ParticlesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
