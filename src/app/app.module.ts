import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleAnalyticsEventsService } from './services/google-analytics-events-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { VideoComponent } from './components/video/video.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { TrustComponent } from './components/trust/trust.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExampleappComponent } from './components/exampleapp/exampleapp.component';
import { CardsComponent } from './components/cards/cards.component';
import { Certifications2Component } from './components/certifications2/certifications2.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Video2Component } from './components/video2/video2.component';
import { ProductsComponent } from './components/products/products.component';
import { UseComponent } from './components/use/use.component';
import { Footer2Component } from './components/footer2/footer2.component';
import { LinkComponent } from './components/link/link.component';
import { DownloadComponent } from './components/download/download.component';
import { AvisoDePrivacidadComponent } from './components/aviso-de-privacidad/aviso-de-privacidad.component';
import { AvisoDePrivacidadColaboradoresComponent } from './components/aviso-de-privacidad-colaboradores/aviso-de-privacidad-colaboradores.component';
import { PoliticaDeCumplimientoComponent } from './components/politica-de-cumplimiento/politica-de-cumplimiento.component';

//Internacionalización
// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { LanguageService } from './services/language.service';
import { NavbarComponent } from './components/navbar/navbar.component';

// required for AOT compilation
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoComponent,
    SolutionsComponent,
    TrustComponent,
    FooterComponent,
    ExampleappComponent,
    CardsComponent,
    WelcomeComponent,
    Video2Component,
    ProductsComponent,
    UseComponent,
    Footer2Component,
    Certifications2Component,
    LinkComponent,
    DownloadComponent,
    AvisoDePrivacidadComponent,
    AvisoDePrivacidadColaboradoresComponent,
    PoliticaDeCumplimientoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
  ],
  providers: [GoogleAnalyticsEventsService, LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
