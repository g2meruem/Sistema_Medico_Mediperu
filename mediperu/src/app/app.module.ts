import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { AltaPacientesComponent } from './alta-pacientes/alta-pacientes.component';
import { SolicitarMedicamentosComponent } from './solicitar-medicamentos/solicitar-medicamentos.component';
import { ContactoComponent } from './contacto/contacto.component';
@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    AltaPacientesComponent,
    SolicitarMedicamentosComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
