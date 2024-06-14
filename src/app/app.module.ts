import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LigasComponent } from './ligas/ligas.component';
import { TablaComponent } from './Tabla/tabla.component';
import { GoleadoresComponent } from './Goleadores/goleadores.component';
import { NovedadesComponent } from './Novedades/novedades.component';
import { FixtureComponent } from './Fixture/fixture.component';
import { TriviaComponent } from './trivia/trivia.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
  ],
  declarations: [
    AppComponent,
    LigasComponent,
    TablaComponent,
    GoleadoresComponent,
    NovedadesComponent,
    FixtureComponent,
    TriviaComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
