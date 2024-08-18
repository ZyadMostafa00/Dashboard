import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-deatils/user-deatils.component';
import { DetailsComponent } from './details/details.component';



const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },  // Default route
    { path: 'list', component: UserListComponent },
    { path: 'details/:id', component: UserDetailsComponent },

  ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
