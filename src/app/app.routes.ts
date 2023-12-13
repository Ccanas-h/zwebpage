import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/interfaz/components/home/home/home.component';
import { ServiceComponent } from './modules/interfaz/components/service/service.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'service',
                component: ServiceComponent
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: "",
                redirectTo: "home",
                pathMatch: "full",
            },
        ]
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
    },
];

