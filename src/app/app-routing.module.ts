import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LigasComponent } from './ligas/ligas.component';
import { TablaComponent } from './Tabla/tabla.component';
import { GoleadoresComponent } from './Goleadores/goleadores.component';
import { NovedadesComponent } from './Novedades/novedades.component';
import { FixtureComponent } from './Fixture/fixture.component';
import { TriviaComponent } from './trivia/trivia.component';

const routes: Routes = [
  { path: '', redirectTo: '/novedades', pathMatch: 'full' },
  { path: 'novedades', component: NovedadesComponent },
  { path: 'ligas', component: LigasComponent },
  { path: 'Trivia', component: TriviaComponent },
  { path: 'clasificacion/:id', component: TablaComponent },
  { path: 'goleadores/:id', component: GoleadoresComponent },
  { path: 'fixture/:id', component: FixtureComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
