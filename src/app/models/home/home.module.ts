import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UsersComponent } from './pages/users/users.component';
import { DetailsComponent } from './pages/details/details.component';


@NgModule({
  declarations: [
    HomeComponent,
    UsersComponent,
    DetailsComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
