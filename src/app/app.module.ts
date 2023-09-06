import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/fotter/footer.component';
import { AboutUsComponent } from './ubout-us/about-us.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
