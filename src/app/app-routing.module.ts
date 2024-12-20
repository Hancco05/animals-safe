import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

const routes: Routes = [
  { path: '', component: InicioComponent }, // Página de inicio
  { path: 'informacion', component: InformacionComponent }, // Página de Información
  { path: 'galeria', component: GaleriaComponent }, // Página de Galería
  { path: 'contacto', component: ContactoComponent }, // Página de Contacto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
