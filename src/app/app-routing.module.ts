import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'validation',
    loadChildren: () => import('./login/validation/validation.module').then( m => m.ValidationPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./empleado/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./empleado/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./departamento/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./departamento/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'grafico',
    loadChildren: () => import('./departamento/grafico/grafico.module').then( m => m.GraficoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
