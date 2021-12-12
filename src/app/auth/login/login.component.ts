
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Auths } from '../auths';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
data;
  loginForm: FormGroup;
  submitted = false;
  error;
  loginError: string;
t1;
t2;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.authService.get().subscribe((data)=>this.data=data)
  
  }

  get username() { return this.loginForm.get('username'); }
get password() { return this.loginForm.get('password'); }

  onSubmit() {
if(this.t1==="admin" && this.t2==="1234"){
this.router.navigate(['/admin']);
localStorage.setItem("login","1")
}
 else
    alert("write proper passsword")
 
  } 
}
