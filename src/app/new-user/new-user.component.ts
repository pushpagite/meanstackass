import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private router : Router,
    ) { }

  ngOnInit(): void {
  }

   //logout
   avatar!:string;
   Logout() {
     console.log("inside logout");
     
     localStorage.removeItem('userToken');
     this.router.navigate(['']);
   }
 
 
   isShown: boolean = false ; // hidden by default
 
   toggleShow() {
 
     this.isShown = ! this.isShown;
     
     }

}
