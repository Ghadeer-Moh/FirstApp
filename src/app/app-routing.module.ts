import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainComponent } from './main/main.component';
import { ErrorNotFoundPageComponent } from './Layout/error-not-found-page/error-not-found-page.component';


const routes: Routes = [
  {
    path:'',
    component: MainComponent
  },
  {
    path:'aboutus',
    component: AboutUsComponent
  },
  {
    path:'**',
    component: ErrorNotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




