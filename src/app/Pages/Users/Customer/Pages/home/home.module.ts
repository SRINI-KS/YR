import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { RCardComponent } from '../../Components/rcard/rcard.component';
import { MaterialDesignModule } from 'src/app/Modules/Material/material-design/material-design.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MaterialDesignModule,
    
  ],
  declarations: [HomePage,RCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HomePageModule {}
