import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CrudService } from '../service/crud.service';
import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';

@Pipe({
  name: "orderBy"
})

export class NamePipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
   transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }    
  }

@Component({
  selector: 'app-user-action',
  templateUrl: './user-action.component.html',
  styleUrls: ['./user-action.component.css']
})
export class UserActionComponent implements OnInit {

  index = ["User Name", "First Name", "Last Name", "Email", "Phone", "DOB", "UserId", "Gender", "Password"];
  p:number=1;
  //data!: Array<any>;
  
  //end
  
    displayedColumns: string[] = ['username', 'userId', 'gender', 'Password'];
  
  
    User:any = [];
  
    constructor(private crudService: CrudService,
      private router:Router) {
      //assigning values search fields
      this.username="";
      this.fname="";
      this.lname="";
      this.email="";
      this.gender="";
      this.userId="";






     }
  
    ngOnInit(): void {
      this.getTableData();
      this.getUsername();
      this.getUserRole();
  
    }
  
    getTableData(){
      this.crudService.GetUsers().subscribe((res) => {
        this.User = res;
        console.log(this.User)
      }); 
  
    }
  
    //delete Action
    delete(id:any, i:any) {
      console.log(id);
      if(window.confirm('Do you want to go ahead?')) {
        this.crudService.deleteUser(id).subscribe((res) => {
          this.User.splice(i, 1);
        })
      }
    }
  
  //  User = new MatTableDataSource<>(User);
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
  
    ngAfterViewInit() {
      this.User.paginator = this.paginator;
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.User.filter = filterValue.trim().toLowerCase();
    }

    //search Fields
    username!: string;
    fname!:string;
    lname!:string;
    email!:string;
    gender!:string;
    userId!:string;







    //search Filters
    Search() {
      if (this.username !== "") {
        this.User = this.User.filter((res: { username: string; }) => {
          return res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase())
        })
      } else if (this.username == "") {
        this.ngOnInit();
      }

      // if (this.fname !== "") {
      //   this.User = this.User.filter((res: { fname: string; }) => {
      //     return res.fname.toLocaleLowerCase().match(this.fname.toLocaleLowerCase())
      //   })
      // } else if (this.fname == "") {
      //   this.ngOnInit();
      // }
    }
    UsernameFilter() {
      if (this.username !== "") {
        this.User = this.User.filter((res: { username: string; }) => {
          return res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase())
        })
      } else if (this.username == "") {
        this.ngOnInit();
      }
    }
    firstnameFilter() {
      if (this.fname !== "") {
        this.User = this.User.filter((res: { fname: string; }) => {
          return res.fname.toLocaleLowerCase().match(this.fname.toLocaleLowerCase())
        })
      } else if (this.fname == "") {
        this.ngOnInit();
      }
    }
    lastnameFilter() {
      if (this.lname !== "") {
        this.User = this.User.filter((res: { lname: string; }) => {
          return res.lname.toLocaleLowerCase().match(this.lname.toLocaleLowerCase())
        })
      } else if (this.lname == "") {
        this.ngOnInit();
      }
    }
    emailFilter() {
      if (this.email !== "") {
        this.User = this.User.filter((res: { email: string; }) => {
          return res.email.toLocaleLowerCase().match(this.email.toLocaleLowerCase())
        })
      } else if (this.email == "") {
        this.ngOnInit();
      }
    }

    useridFilter() {
      if (this.userId !== "") {
        this.User = this.User.filter((res: { userId: string; }) => {
          return res.userId.toLocaleLowerCase().match(this.userId.toLocaleLowerCase())
        })
      } else if (this.userId == "") {
        this.ngOnInit();
      }
    }

    genderFilter() {
      if (this.gender !== "") {
        this.User = this.User.filter((res: { gender: string; }) => {
          return res.gender.toLocaleLowerCase().match(this.gender.toLocaleLowerCase())
        })
      } else if (this.gender == "") {
        this.ngOnInit();
      }
    }

    key: string = 'username';
    reverse: boolean = false;
    sort(key: string) {
      console.log(key);
      this.key = key;
      this.reverse = !this.reverse;
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
      console.log('username ' + this.username);
  
  
    }
  
  
    //Get Users Role
    Users: any = [];
    role!:string;
    getUserRole() {
      console.log('inside get user');
      
      this.crudService.GetUsers().subscribe((res) => {
        this.Users = res;
        console.log(this.User)
  
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
