import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CreateListComponent } from './create-list/create-list.component';
import { ListTeamComponent } from './list-team/list-team.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
  {path:'create-list',component:CreateListComponent,canActivate:[AuthGuard]},
  {path:'home/create-list/:id',component:CreateListComponent},
  {path:'home',component:ListTeamComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
