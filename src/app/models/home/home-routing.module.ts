import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { DetailsComponent } from "./pages/details/details.component";
import { UsersComponent } from "./pages/users/users.component";

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'users/:id', component: DetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
