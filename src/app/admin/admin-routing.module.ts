import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginService } from '../auth/login.service';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { ManageBlogsComponent } from './manage-blogs/manage-blogs.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { ManagePagesComponent } from './manage-pages/manage-pages.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent, canActivate:[LoginService],
   
    children: [
      {
      path: '',
      children: [
        { path: 'blogs', component: ManageBlogsComponent },
        { path: 'categories', component: ManageCategoriesComponent ,canActivate:[LoginService]},
        { path: 'pages', component: ManagePagesComponent ,canActivate:[LoginService]},
        { path: 'logout', component:LogoutComponent ,canActivate:[LoginService]},
        { path: '', component: AdminDashboardComponent,canActivate:[LoginService]}
      ],
    }
  ]
  }
];;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
