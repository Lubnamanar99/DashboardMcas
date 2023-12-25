import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdmissionComponent } from './admission/admission.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LocationComponent } from './About/location.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'',redirectTo:'dashboard',pathMatch:'full'
  },
  {
    path:'admission',component:AdmissionComponent
  },
  {
    path:'gallery',component:GalleryComponent
  },
  {
    path:'about',component:LocationComponent
  },
  {
    path:'contact',component:ContactComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
