import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  path1: String = "./assets/image1.jpg";
  hide = true;
  logindata: Array<any>;


  name = new FormControl('', [Validators.required]);
  pw = new FormControl('', [Validators.required, Validators.email]);


  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'Enter name';
    }

    if (this.pw.hasError('required')) {
      return 'Enter password';
    }

    // return this.name.hasError('name') ? 'Not a valid email' : '';
    return;
  }

  getEmailErrorMessage() {


    if (this.pw.hasError('required')) {
      return 'Enter password';
    }

    // return this.name.hasError('name') ? 'Not a valid email' : '';
    return;
  }


  loginDetails !: any;

  myform = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(private crudService: CrudService,
    private router: Router,
    private ngZone: NgZone) {
    this.logindata = new Array();

  }

  ngOnInit(): void {
  }


  login(): any {
    console.log("inside login");
    //console.log(this.myform.value);
    this.crudService.loginData(this.myform.value).
      subscribe((res) => {
        this.loginDetails = res;
        console.log(this.loginDetails);
        if (res.username != this.username || res.password != this.password) {

          console.log(res.message);
          //set username and token from localstorage
          let token = sessionStorage.setItem('userToken', res.token);
          let uname = sessionStorage.setItem('userName', res.username);

          // after login then navigate page from dashborad 
          if (token !== res.token || uname !== res.username) {
            this.router.navigateByUrl('/graphmodule')
            alert('login succesfull');
          }
          else {
            alert('user not logged in');

            this.router.navigateByUrl('')

          }
        }

        // else if (!res.username) {
        //   console.log("invalid username");
        //   this.getErrorMessage();
        // } else if (!res.password) {
        //   console.log("invalid password");
        //   this.getEmailErrorMessage();
        // } else {
        //   console.log("username & password  incorrect");
        // }


      })



  }

}
// login() {

  //   this.crudService.loginData(this.myform.value).subscribe((data) => {
  //     this.loginDetails = data;
  //     // console.log(this.loginDetails);

  //     //console.log("return api fetch data is" +data.token);
  //     let mytoken = data.token;
  //     sessionStorage.setItem("token", mytoken);

  //     //console.log('user login successfully!')

  //     this.ngZone.run(() => this.router.navigateByUrl('/graphmodule'))
  //     alert("User Login Successful")
  //   }, (err) => {
  //     alert("Incorrect Username or Password");
  //     console.log(err);
  //   });

  // }