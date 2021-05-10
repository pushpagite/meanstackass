import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private router : Router,
   private crudService :CrudService ) { }

  ngOnInit(): void {
    this.getUsername();
    this.getUserRole();
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
     

     uname!: string | null;
    getUsername(): void {
  
      this.uname = sessionStorage.getItem('userName');
      console.log('username ' + this.uname);
  
  
    }
  
  
    //Get Users Role
    Users: any = [];
    role!:string;
    getUserRole() {
      console.log('inside get user');
      
      this.crudService.GetUsers().subscribe((res) => {
        this.Users = res;
        //console.log(this.User)
  
        //iterate through array
        this.Users.forEach( (value: any) => {
          //console.log('inside for');
          //console.log(value);
         // console.log(value.username);
          if(value.username==this.uname)
          {
  
            this.role = value.userrole;
            console.log('Userrole'+this.role);
            
          }
          
        });
  
      });
  
    }

}
