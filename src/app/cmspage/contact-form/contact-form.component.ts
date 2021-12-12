import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { CmspageService } from '../cmspage.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
model=new Contact();
submitted=false;
error;

  constructor(private cmsService:CmspageService, private router:Router) { }
  
  ngOnInit(): void {
  }

  onSubmit(contactForm :NgForm){
        this.submitted=true;
        
        this.cmsService.postForm(this.model).subscribe(
          (data)=>this.model=data,
    (error)=>this.error=error);
    contactForm.reset();
  }
  goToHome(){
    this.router.navigate(['/'])
  }
}
