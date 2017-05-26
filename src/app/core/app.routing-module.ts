import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './mainPage/main-page.component';
import { PhoneDetailsComponent } from '../component/phone';


const appRoutes: Routes = [
  
  {
    path: '',
    component: MainPageComponent,
    data: { title: 'Phones' }
  },
  {
    path: 'phone/:id',
    component: PhoneDetailsComponent,
    data: { title: 'Phone' }
  },
  { path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
      // ,{ preloadingStrategy: SelectivePreloadingStrategy }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
