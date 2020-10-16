import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent }  from './pages/landing-page/landing-page.component';
import { LegalEntityMaintenanceComponent } from './pages/legal-entity-maintenance/legal-entity-maintenance.component';
import { CurrentQuarterResultComponent } from './pages/current-quarter-result/current-quarter-result.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/landingPage' },
  { path: 'landingPage', component: LandingPageComponent},
  { path: 'legalEntityMainenance', component: LegalEntityMaintenanceComponent},
  { path: 'currentQuarterResult', component: CurrentQuarterResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
