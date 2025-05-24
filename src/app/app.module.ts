import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Components

import { AppComponent } from './app.component';
import { PokeHeaderComponent } from './shared/poke-header/poke-header.component';
import { PokeListComponent } from './shared/poke-list/poke-list.component';
import { PokeSearchComponent } from './shared/poke-search/poke-search.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [AppComponent, PokeHeaderComponent, PokeListComponent, PokeSearchComponent, HomeComponent, DetailsComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
