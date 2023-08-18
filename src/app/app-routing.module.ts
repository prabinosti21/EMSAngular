import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EventComponent } from './pages/event/event.component';
import { RegisterComponent } from './pages/register/register.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { GuestComponent } from './pages/guest/guest.component';
import { FoodComponent } from './pages/food/food.component';
import { EquipmentsComponent } from './pages/equipments/equipments.component';
import { NewEventComponent } from './pages/new-event/new-event.component';
import { ResetComponent } from './pages/reset/reset.component';
import { NewPasswordComponent } from './pages/new-password/new-password.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'home',component: EventComponent},
  {path:'register', component: RegisterComponent},
  {path:'reset', component: ResetComponent},
  {path:'set', component: NewPasswordComponent},
  {path:'new', component: NewEventComponent},
  {path:'update/:eid', component: NewEventComponent},
  {path:'details/:eid', component: EventDetailsComponent},
  {path:'guest/:eid', component: GuestComponent},
  {path:'food/:eid', component: FoodComponent},
  {path:'equipment/:eid', component: EquipmentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
