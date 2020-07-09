import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EdutechModule } from './edutech/edutech.module'
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotExistComponent } from './page-not-exist/page-not-exist.component';
//import { EdutechLoginComponent } from './edutech/edutech-login/edutech-login.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    PageNotExistComponent
  ],
  imports: [
    BrowserModule,
    EdutechModule,
    AppRoutingModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
