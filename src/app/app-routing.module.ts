import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

// Rutas - routerLinks

import { InicioComponent } from './components/inicio/inicio.component';
import { InfoComponent } from './components/info/info.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { FilesComponent } from './components/files/files.component';

const routes: Routes = [
  {path: 'inicio', title: 'L2Name', component:InicioComponent},
  {path: 'info', title: 'L2Name Info', component:InfoComponent},
  {path: 'files', title: 'L2Name Files', component:FilesComponent},
  {path: 'donaciones', title: 'L2Name Donaciones', component:DonacionesComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
