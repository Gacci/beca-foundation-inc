import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';


const routes: Routes = [{
    path: 'home',
    component: HomeComponent
}, {
    path: 'scholarships',
    component: ScholarshipsComponent
}, {
    path: 'about',
    component: AboutComponent
}, {
    path:'**',
    redirectTo: 'home'
}];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
