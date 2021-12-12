import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmspageRoutingModule } from './cmspage-routing.module';
import { PageComponent } from './page/page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PageComponent, ContactFormComponent],
  imports: [
    CommonModule,
    CmspageRoutingModule,
    FormsModule
  ]
})
export class CmspageModule { }
