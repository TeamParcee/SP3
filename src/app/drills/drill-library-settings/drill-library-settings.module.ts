import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrillLibrarySettingsPageRoutingModule } from './drill-library-settings-routing.module';

import { DrillLibrarySettingsPage } from './drill-library-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrillLibrarySettingsPageRoutingModule
  ],
  declarations: [DrillLibrarySettingsPage]
})
export class DrillLibrarySettingsPageModule {}
