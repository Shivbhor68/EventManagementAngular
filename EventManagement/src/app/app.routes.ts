import { Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { MybookingComponent } from './mybooking/mybooking.component';
import { ProfileComponent } from './profile/profile.component';
import { Component } from '@angular/core';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'Event',
    component: EventsComponent,
  },

  {
    path: 'Mybooking',
    component: MybookingComponent,
  },
  {
    path: 'Profile',
    component: ProfileComponent,
  },
  {
    path: 'Aboutus',
    component: AboutusComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', component: EventsComponent },
  {
    path: '**',
    component: NotfoundComponent,
  },
];
