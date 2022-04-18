import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    loadChildren: () => import('./paginas/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'realizar',
    loadChildren: () => import('./paginas/realizar/realizar.module').then( m => m.RealizarPageModule)
  },
  {
    path: 'realizarsi',
    loadChildren: () => import('./paginas/realizarsi/realizarsi.module').then( m => m.RealizarsiPageModule)
  },
  {
    path: 'realizarno',
    loadChildren: () => import('./paginas/realizarno/realizarno.module').then( m => m.RealizarnoPageModule)
  },
  {
    path: 'tipodemaltrato',
    loadChildren: () => import('./paginas/tipodemaltrato/tipodemaltrato.module').then( m => m.TipodemaltratoPageModule)
  },
  {
    path: 'maltratosexual',
    loadChildren: () => import('./paginas/maltratosexual/maltratosexual.module').then( m => m.MaltratosexualPageModule)
  },
  {
    path: 'maltratofisico',
    loadChildren: () => import('./paginas/maltratofisico/maltratofisico.module').then( m => m.MaltratofisicoPageModule)
  },
  {
    path: 'maltratopsicologico',
    loadChildren: () => import('./paginas/maltratopsicologico/maltratopsicologico.module').then( m => m.MaltratopsicologicoPageModule)
  },
  {
    path: 'grooming',
    loadChildren: () => import('./paginas/grooming/grooming.module').then( m => m.GroomingPageModule)
  },
  {
    path: 'ciberbullying',
    loadChildren: () => import('./paginas/ciberbullying/ciberbullying.module').then( m => m.CiberbullyingPageModule)
  },
  {
    path: 'maltratopresencial',
    loadChildren: () => import('./paginas/maltratopresencial/maltratopresencial.module').then( m => m.MaltratopresencialPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
