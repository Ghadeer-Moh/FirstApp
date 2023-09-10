import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainComponent } from './main/main.component';
import { ErrorNotFoundPageComponent } from './Layout/error-not-found-page/error-not-found-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent
  },
  {
    path:'contact',
    component: ContactUsComponent
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




