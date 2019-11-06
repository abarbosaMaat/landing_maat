import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { VideoComponent } from './components/video/video.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { TrustComponent } from './components/trust/trust.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExampleappComponent } from './components/exampleapp/exampleapp.component';
import { CardsComponent } from './components/cards/cards.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { Certifications2Component } from './components/certifications2/certifications2.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Video2Component } from './components/video2/video2.component';
import { ProductsComponent } from './components/products/products.component';
import { UseComponent } from './components/use/use.component';
import { Footer2Component } from './components/footer2/footer2.component';
import { LinkComponent } from './components/link/link.component';
import { RedirectComponent } from './components/redirect/redirect.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'video', component: VideoComponent},
  {path: 'solutions', component: SolutionsComponent},
  {path: 'trust', component: TrustComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'Example', component: ExampleappComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'certifications', component: CertificationsComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'video2', component: Video2Component},
  {path: 'products', component: ProductsComponent},
  {path: 'use', component: UseComponent},
  {path: 'footer2', component: Footer2Component},
  {path: 'certifications2', component: Certifications2Component},
  {path: 'link', component: LinkComponent},
  {path: 'redirect', component: RedirectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
