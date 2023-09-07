import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";


import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/fotter/footer.component';
import {RouterOutlet} from "@angular/router";
import { AboutUsComponent } from './about-us/about-us.component';
import {AppRoutingModule} from "./app-routing.module";
import { MainComponent } from './main/main.component';
import { IndexComponent } from './Layout/index/index.component';
import { ErrorNotFoundPageComponent } from './Layout/error-not-found-page/error-not-found-page.component';
import { BtnComponent } from './btn/btn.component';


@NgModule({
  declarations: [

    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    MainComponent,
    IndexComponent,
    ErrorNotFoundPageComponent,
    BtnComponent
  ],
  imports: [
    BrowserModule,
    // RouterOutlet
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }
