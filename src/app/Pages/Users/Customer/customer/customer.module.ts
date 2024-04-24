import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerPageRoutingModule } from './customer-routing.module';

import { CustomerPage } from './customer.page';
import { ProfilePage } from '../Pages/profile/profile.page';
import { MyRequestPage } from '../Pages/my-request/my-request.page';
import { CartPage } from '../Pages/cart/cart.page';
import { HomePage } from '../Pages/home/home.page';
import { MaterialDesignModule } from 'src/app/Modules/Material/material-design/material-design.module';
import {MatTabsModule} from '@angular/material/tabs';
import { RCardComponent } from '../Components/rcard/rcard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerPageRoutingModule,
    
  ],
  declarations: [CustomerPage,
 ],
 schemas: [CUSTOM_ELEMENTS_SCHEMA]

}
)
export class CustomerPageModule {}
