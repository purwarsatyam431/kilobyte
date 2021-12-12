import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageBlogsComponent } from './manage-blogs/manage-blogs.component';
import { ManagePagesComponent } from './manage-pages/manage-pages.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { LogoutComponent } from './logout/logout.component';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
@NgModule({
  declarations: [AdminComponent, AdminDashboardComponent, ManageBlogsComponent, ManagePagesComponent, ManageCategoriesComponent, LogoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
MatDialogModule,
MatButtonModule,MatIconModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
