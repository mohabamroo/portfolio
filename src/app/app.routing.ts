import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    data: { title: 'Home', transparentHeader: true }
  },

  {
    path: 'projects',
    component: ProjectsComponent,
    data: { title: 'Projects', transparentHeader: false }
  },

  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About Me', transparentHeader: false }
  },

  {
    path: '**',
    component: NotFoundComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  exports: []
})
export class AppRoutingModule {}
