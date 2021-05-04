import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from './../service/crud.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  hide = true;


  newuserForm!: FormGroup;



  constructor( public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService) {
      this.newuserForm = this.formBuilder.group({
        username: '',
        fname: '',
        lname: '',
        email: '',
        phone: '',
        date: '',
        userId: '',
        gender: [''],
        password: ''
      })
     }

     //add data
     onSubmit(): any {
      this.crudService.AddUser(this.newuserForm.value)
        .subscribe(() => {
          console.log('Data added successfully!');
          this.ngZone.run(() => this.router.navigateByUrl('/useraction'))
        }, (err) => {
          console.log(err);
        });
    }

  ngOnInit(): void {
  }

}
