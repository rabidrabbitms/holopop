import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'viewallrecieve',
    loadChildren: () => import('./viewallrecieve/viewallrecieve.module').then( m => m.viewallrecievePageModule)
  },
  {
    path: 'viewallsent',
    loadChildren: () => import('./viewallsent/viewallsent.module').then(m => m.viewallsentPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./camera/camera.module').then( m => m.SearchPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./carddetails/carddetails.module').then( m => m.CardDetailsPageModule)
  },
  {
    path: 'favorite',
    loadChildren: () => import('./favorite/favorite.module').then( m => m.FavoritePageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'privacypolicy',
    loadChildren: () => import('./privacypolicy/privacypolicy.module').then( m => m.PrivacypolicyPageModule)
  },
  {
    path: 'myaccunt',
    loadChildren: () => import('./myaccunt/myaccunt.module').then( m => m.MyaccuntPageModule)
  },
  {
    path: 'tranhis',
    loadChildren: () => import('./tranhis/tranhis.module').then( m => m.TranhisPageModule)
  },
  {
    path: 'accountmanage',
    loadChildren: () => import('./accountmanage/accountmanage.module').then( m => m.AccountmanagePageModule)
  },
  {
    path: 'viewoffer',
    loadChildren: () => import('./viewoffer/viewoffer.module').then( m => m.ViewofferPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
