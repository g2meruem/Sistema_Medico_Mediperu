import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AltaPacientesComponent } from './alta-pacientes/alta-pacientes.component';
import { SolicitarMedicamentosComponent } from './solicitar-medicamentos/solicitar-medicamentos.component';

const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent },
  { path: 'alta-pacientes', component: AltaPacientesComponent },
  { path: 'solicitar-medicamentos', component: SolicitarMedicamentosComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
