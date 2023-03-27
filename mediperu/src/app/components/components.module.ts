import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AltasComponent } from './altas/altas.component';




@NgModule({
  declarations: [NavbarComponent, AltasComponent,],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    AltasComponent
  ]
})
export class ComponentsModule { }
