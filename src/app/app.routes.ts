import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { EvolutionComponent } from './evolution/evolution.component';
import { WorkComponent } from './work/work.component';
import { SecurityComponent } from './security/security.component';
import { ParametersComponent } from './parameters/parameters.component';
import { ToolsComponent } from './tools/tools.component';
import { SensorsComponent } from './sensors/sensors.component';



const APP_ROUTES: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'benefits', component: BenefitsComponent },
  { path: 'evolution', component: EvolutionComponent },
  { path: 'work', component: WorkComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'parameters', component: ParametersComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'sensors', component: SensorsComponent },
  { path: '**', component: HomeComponent },

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
