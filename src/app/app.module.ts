import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { EventComponent } from './pages/event/event.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { FoodComponent } from './pages/food/food.component';
import { GuestComponent } from './pages/guest/guest.component';
import { EquipmentsComponent } from './pages/equipments/equipments.component';
import { NewEventComponent } from './pages/new-event/new-event.component';
import { ResetComponent } from './pages/reset/reset.component';
import { NewPasswordComponent } from './pages/new-password/new-password.component';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { ReviewComponent } from './review/review.component';
import { NewReviewComponent } from './new-review/new-review.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EventComponent,
    EventDetailsComponent,
    FoodComponent,
    GuestComponent,
    EquipmentsComponent,
    NewEventComponent,
    ResetComponent,
    NewPasswordComponent,
    ReviewComponent,
    NewReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BackButtonDisableModule.forRoot({preserveScroll: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
