import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from './../service/crud.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  hide = true;
  userForm!: FormGroup;


  path: String = "./assets/image1.jpg";
  role = [
    { value: 'M', viewValue: 'Manager' },
    { value: 'G', viewValue: 'General' }

  ];


   gendr = [
    { value: 'M', viewValue: 'Male' },
    { value: 'F', viewValue: 'Female' }

  ];
 

  ngOnInit(): void {

  }


  uname = new FormControl('', [Validators.required]);
  fname = new FormControl('', [Validators.required]);
  lname = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  dob = new FormControl('', Validators.required);
  userid = new FormControl('', [Validators.required]);
  contact = new FormControl('',[Validators.required]);
  role1 = new FormControl('',[Validators.required]);
  gdr  = new FormControl('',[Validators.required]);
  pw = new FormControl('',[Validators.required]);
  vpw = new FormControl('',[Validators.required]);





  getUserErrorMessage() {
    if (this.uname.hasError('required')) {
      return 'Enter user name';
    }

    if (this.uname.hasError('required')) {
      return 'Enter User Name';
    }

    return;
  }


  getFnameErrorMessage() {
    if (this.fname.hasError('required')) {
      return 'Enter First name';
    }

    if (this.fname.hasError('required')) {
      return 'Enter First Name';
    }

    return;
  }

  getLnameErrorMessage() {
    if (this.lname.hasError('required')) {
      return 'Enter Last name';
    }

    if (this.lname.hasError('required')) {
      return 'Enter Last Name';
    }

    return;
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Enter Email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  getUserIdErrorMessage() {
    if (this.userid.hasError('required')) {
      return 'Enter UserID';
    }

    if (this.userid.hasError('required')) {
      return 'Enter UserID';
    }

    return;
  }


  getDOBErrorMessage() {
    if (this.dob.hasError('required')) {
      return 'Enter DOb';
    }
    return;
  }

  getContactErrorMessage()
  {
    if (this.contact.hasError('required')) {
      return 'Enter Phone';
    }
    return
  }

getRoleErrorMessage()
{
  if (this.role1.hasError('required')) {
    return 'Plzz select your Role';
  }
  return
}

getGenderErrorMessage()
{
  if (this.gdr.hasError('required')) {
    return 'Plzz select your Gender';
  }
  return
}

// getErrorMessage_password() {
//    if (this.pw.hasError('required')) {
//            return 'You must enter a Password';
//       }
//        return this.pw.hasError('password') ? 'Not a valid password' : '';
//      }

//     getErrorMessage_verifypassword() {
//     if (this.pw.value == this.vpw.value) {
//       return ' password matched'
//     } else {
//       return 'Password not mateched ';

//     }
//   }   


  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.userForm = this.formBuilder.group({
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



  onSubmit(): any {
    this.crudService.AddUser(this.userForm.value)
      .subscribe(() => {
        console.log('Data added successfully!');
        this.ngZone.run(() => this.router.navigateByUrl(''))
      }, (err) => {
        console.log(err);
      });
  }




}
