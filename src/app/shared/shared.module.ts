import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [MenuButtonComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    MenuButtonComponent
  ]
})
export class SharedModule { }
