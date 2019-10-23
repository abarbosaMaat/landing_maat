import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideoComponent } from './components/video/video.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { TrustComponent } from './components/trust/trust.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExampleappComponent } from './components/exampleapp/exampleapp.component';
import { CardsComponent } from './components/cards/cards.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Video2Component } from './components/video2/video2.component';
import { ProductsComponent } from './components/products/products.component';
import { UseComponent } from './components/use/use.component';
import { Footer2Component } from './components/footer2/footer2.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    VideoComponent,
    SolutionsComponent,
    TrustComponent,
    FooterComponent,
    ExampleappComponent,
    CardsComponent,
    CertificationsComponent,
    WelcomeComponent,
    Video2Component,
    ProductsComponent,
    UseComponent,
    Footer2Component,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
