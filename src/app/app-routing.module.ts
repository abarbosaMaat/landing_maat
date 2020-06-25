import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { VideoComponent } from './components/video/video.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { TrustComponent } from './components/trust/trust.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExampleappComponent } from './components/exampleapp/exampleapp.component';
import { CardsComponent } from './components/cards/cards.component';
import { Certifications2Component } from './components/certifications2/certifications2.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { Video2Component } from './components/video2/video2.component';
import { ProductsComponent } from './components/products/products.component';
import { UseComponent } from './components/use/use.component';
import { Footer2Component } from './components/footer2/footer2.component';
import { LinkComponent } from './components/link/link.component';
import { DownloadComponent } from './components/download/download.component';
import { AvisoDePrivacidadComponent } from './components/aviso-de-privacidad/aviso-de-privacidad.component';
import { AvisoDePrivacidadColaboradoresComponent } from './components/aviso-de-privacidad-colaboradores/aviso-de-privacidad-colaboradores.component';
import { PoliticaDeCumplimientoComponent } from './components/politica-de-cumplimiento/politica-de-cumplimiento.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: { titulo: 'maat.ai | Home'}},
  {path: 'video', component: VideoComponent,},
  {path: 'solutions', component: SolutionsComponent},
  {path: 'trust', component: TrustComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'example', component: ExampleappComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'empresas', component: EmpresasComponent, data: { titulo: 'maat.ai | Empresas'}},
  {path: 'video2', component: Video2Component},
  {path: 'products', component: ProductsComponent},
  {path: 'use', component: UseComponent},
  {path: 'footer2', component: Footer2Component},
  {path: 'certifications2', component: Certifications2Component},
  {path: 'link', component: LinkComponent},
  {path: 'download', component: DownloadComponent},
  {path: 'aviso-de-privacidad', component: AvisoDePrivacidadComponent},
  {path: 'aviso-de-privacidad-colaboradores', component: AvisoDePrivacidadColaboradoresComponent},
  {path: 'politica-de-cumplimiento', component: PoliticaDeCumplimientoComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
