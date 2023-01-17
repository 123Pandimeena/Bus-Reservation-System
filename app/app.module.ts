import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { SelectbusComponent } from './selectbus/selectbus.component';
import { SearchComponent } from './search/search.component';
import { BusComponent } from './bus/bus.component';
import { ReComponent } from './re/re.component';
import { HomeComponent } from './home/home.component';
import { TicketComponent } from './ticket/ticket.component';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes=[

  {path:'',component:HomeComponent },
  {path:'login',component:LoginComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'re',component:ReComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'search',component:SearchComponent},
  {path:'selectbus',component:SelectbusComponent},
  {path:'ticket',component:TicketComponent},
  {path:'bus',component:BusComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegistrationComponent,
    SelectbusComponent,
    SearchComponent,
    BusComponent,
    ReComponent,
    HomeComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
