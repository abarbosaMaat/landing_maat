import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { VideoComponent } from './components/video/video.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { DescriptionComponent } from './components/description/description.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { TrustComponent } from './components/trust/trust.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExampleappComponent } from './components/exampleapp/exampleapp.component';
import { CardsComponent } from './components/cards/cards.component';
import { Certifications2Component } from './components/certifications2/certifications2.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { DesuscribirseComponent } from './components/desuscribirse/desuscribirse.component';
import { LoginComponent } from './components/deleteProfile/login/login.component';
import { ConfirmCodeComponent } from './components/deleteProfile/confirm-code/confirm-code.component';
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
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoComponent,
    CompaniesComponent,
    DescriptionComponent,
    SolutionsComponent,
    TrustComponent,
    FooterComponent,
    ExampleappComponent,
    CardsComponent,
    EmpresasComponent,
    DesuscribirseComponent,
    LoginComponent,
    ConfirmCodeComponent,
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
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (HttpLoaderFactory),
                deps: [HttpClient]
            }
        })
  ],
  providers: [LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
