import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {


  constructor() { }

check(user:string,pass:string)
{
  if(user==pass)
  {
    localStorage.setItem("username","admin");
    return true;
  }
  else{
    return false;
  }
  
}
}
