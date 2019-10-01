import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './pages/public/login/login.module#LoginPageModule' },
  { path: 'cadastro', loadChildren: './pages/public/cadastro/cadastro.module#CadastroPageModule' },
  { path: 'recuperar-senha', loadChildren: './pages/public/recuperar-senha/recuperar-senha.module#RecuperarSenhaPageModule' },
  { path: 'administracao', loadChildren: './pages/private/administracao/administracao.module#AdministracaoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
