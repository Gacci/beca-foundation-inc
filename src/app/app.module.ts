import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './components/footer/footer.component';


import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';


@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        NavigationComponent,

        HomeComponent,
        AboutComponent,
        ScholarshipsComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
