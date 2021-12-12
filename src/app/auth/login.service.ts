import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate{
canActivate(){
  if(localStorage.getItem("login"))
  return true;
  else
  alert("You have to login first.")
  this.router.navigate(["/login"])

}
  constructor(private router:Router) { }
}
