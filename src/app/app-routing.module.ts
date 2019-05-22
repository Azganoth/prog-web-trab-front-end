import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadoOverviewPageComponent } from './modules/estado/pages/estado-overview-page/estado-overview-page.component';
import { ErrorPageComponent } from './shared/pages/error-page/error-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: '404', component: ErrorPageComponent},
  {path: 'estados', component: EstadoOverviewPageComponent},

  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
