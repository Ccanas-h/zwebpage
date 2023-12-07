import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/interfaz/components/home/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }
];

