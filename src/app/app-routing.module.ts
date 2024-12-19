import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'validation',
    pathMatch: 'full'
  },
  {
    path: 'validation',
    loadChildren: () => import('./login/validation/validation.module').then( m => m.ValidationPageModule)
  },
  {
    path: 'departamento/create',
    loadChildren: () => import('./Departamentos/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'departamento/edit',
    loadChildren: () => import('./Departamentos/edit/edit.module').then( m => m.EditPageModule)
  },
  // {
  //   path: 'empleado/create',
  //   loadChildren: () => import('./Empleados/create/create.module').then( m => m.CreatePageModule)
  // },
  // {
  //   path: 'empleado/edit',
  //   loadChildren: () => import('./Empleados/edit/edit.module').then( m => m.EditPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
