import { Component, OnInit } from '@angular/core';
import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthGuardService } from "./../../guards/auth-guard.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthGuardService]
})

export class LoginComponent implements OnInit {

  name:string;
  pass:string;
  constructor(private router:Router,private authservice:AuthGuardService) { }

  ngOnInit() {
    
  }

  login(e)
  {
  if(this.authservice.check(this.name,this.pass))
  {
      this.router.navigate(['/dash']);
  }
  else{
    this.router.navigate(['/login']);
  } 
  }
}
