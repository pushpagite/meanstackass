import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


// export interface PeriodicElement {
//   username: string;
//   firstname: string;
//   lastname: string;
//   Email: string;
//   phone: number;
//   DOB:string;


// }
// const ELEMENT_DATA: PeriodicElement[] =[
//   {username: 'Pushpa Gite', firstname: 'Pushpa', lastname: 'Gite', Email: 'pushpagite@gmail.com',phone:123456789,DOB:'12/09/1996'},
//   {username: 'Nagesh Dawale', firstname: 'Nagesh', lastname: 'Dawale', Email: 'nagesh@gmail.com',phone:123456789,DOB:'14/06/1996'},
//   {username: 'Rutik Gite', firstname: 'Rutik', lastname:'Gite', Email: 'rutik@gmail.com',phone:123456789,DOB:'21/07/2001'},
//   {username: 'Sakshee Sarode', firstname: 'Sakshee', lastname: 'Sarode', Email: 'sakshee@gmail.com',phone:123456789,DOB:'12/09/1996'},
//   {username: 'Snehal Gite', firstname: 'Snehal', lastname:'Gite', Email: 'snehal@gmail.com',phone:123456789,DOB:'12/09/1996'},
  
// ];


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})



export class UserDetailsComponent implements OnInit {

  User:any = [];

  constructor(private crudService: CrudService) { }

// Displaying Table Data
//index = ["User Name", "First Name", "Last Name", "Email", "Phone", "DOB", "UserId", "Gender", "Password"];
displayedColumns: string[] = ['username', 'firstname', 'lastname', 'Email','phone','DOB'];

ngOnInit(): void {
  this.getTableData();

}

getTableData(){
  this.crudService.GetUsers().subscribe((res) => {
    this.User = res;
    console.log(res)
  }); 

}




  // ngOnInit(): void {
  //   this.crudService.GetUsers().subscribe(res => {
  //     console.log(res)
  //     this.Users =res;
  //   });    
  // }

  //new added

  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.User.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.User.filter = filterValue.trim().toLowerCase();
  }






}

//new added

//new added end





