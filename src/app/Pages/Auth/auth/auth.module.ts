import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { LoginComponent } from '../Components/login/login.component';
import { RegisterComponent } from '../Components/register/register.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AuthPageRoutingModule,HttpClientModule,ReactiveFormsModule],
  declarations: [AuthPage, LoginComponent, RegisterComponent,],
})
export class AuthPageModule {}
