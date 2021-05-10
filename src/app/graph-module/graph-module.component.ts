import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-graph-module',
  templateUrl: './graph-module.component.html',
  styleUrls: ['./graph-module.component.css']
})
export class GraphModuleComponent implements OnInit {

  constructor(private router :Router,
    private crudService:CrudService) { }

  ngOnInit(): void {
    this.getUsername();
    this.getUserRole();
  }
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

    username!: string | null;
    getUsername(): void {
  
      this.username = sessionStorage.getItem('userName');
      console.log('username ' + this.username);
  
  
    }
  
  
    //Get Users Role
    User: any = [];
    role!:string;
    getUserRole() {
      this.crudService.GetUsers().subscribe((res) => {
        this.User = res;
        console.log(this.User)
  
        //iterate through array
        this.User.forEach( (value: any) => {
          //console.log('inside for');
          //console.log(value);
          console.log(value.username);
          if(value.username==this.username)
          {
  
            this.role = value.userrole;
            console.log(this.role);
            
          }
          
        });
  
      });
  
    }


}
