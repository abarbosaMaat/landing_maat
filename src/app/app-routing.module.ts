import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { VideoComponent } from './components/video/video.component';
import { ProblemsComponent } from './components/problems/problems.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { TrustComponent } from './components/trust/trust.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'video', component: VideoComponent},
  {path: 'problems', component: ProblemsComponent},
  {path: 'solutions', component: SolutionsComponent},
  {path: 'trust', component: TrustComponent},
  {path: 'footer', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
