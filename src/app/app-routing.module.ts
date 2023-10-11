import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  RouterModule,
  Routes,
  CanLoad,
} from '@angular/router';
import { CustomerGuard } from './Guards/Customer/customer.guard';
import { ProviderGuard } from './Guards/Provider/provider.guard';
import { AuthGuard } from './Guards/Auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./Pages/Auth/auth/auth.module').then((m) => m.AuthPageModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },

  {
    path: 'customer',
    loadChildren: () =>
      import('./Pages/Users/Customer/customer/customer.module').then(
        (m) => m.CustomerPageModule
      ),

    canActivate: [CustomerGuard],
    canLoad: [CustomerGuard],
  },
 
  {
    path: 'provider',
    loadChildren: () =>
      import('./Pages/Users/Provider/provider/provider.module').then(
        (m) => m.ProviderPageModule
      ),
    canActivate: [ProviderGuard],
    canLoad: [ProviderGuard],
  },

  {
    path: 'admin',
    loadChildren: () => import('./Pages/Users/Admin/admin/admin.module').then( m => m.AdminPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
