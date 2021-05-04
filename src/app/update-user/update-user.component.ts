import { Component, NgZone, OnInit } from '@angular/core';
import {  FormBuilder,FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  hide = true;


  getId: any;
  updateForm: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.GetUser(this.getId).subscribe(res => {
      console.log(res);
      this.updateForm.setValue({
        username: res['username'],
        fname: res['fname'],
        lname: res['lname'],
        email: res['email'],
        phone: res['phone'],
        date: res['date'],
        userId: res['userId'],
        gender: res['gender'],
        password: res['password']
      });
    });

    this.updateForm = this.formBuilder.group({
      username: '',
        fname: '',
        lname: '',
        email: '',
        phone: '',
        date: '',
        userId:'',
        gender: '',
        password: ''
    })
  }

  ngOnInit() { }

  onUpdate(): any {
    this.crudService.updateUser(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/useraction'))
      }, (err) => {
        console.log(err);
    });
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
