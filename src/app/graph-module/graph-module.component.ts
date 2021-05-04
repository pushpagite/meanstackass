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


}
