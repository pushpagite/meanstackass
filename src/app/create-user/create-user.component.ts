import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from './../service/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  hide = true;
  url: any = '';
  role = [
    { value: 'Manager', viewValue: 'Manager' },
    { value: 'General', viewValue: 'General' }

  ];


  newuserForm!: FormGroup;




  constructor(public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService,
    private Act_Router: ActivatedRoute
  ) {
    this.newuserForm = this.formBuilder.group({
      username: '',
      fname: '',
      lname: '',
      email: '',
      phone: '',
      date: '',
      userId: '',
      userrole:'',
      gender: [''],
      password: '',
      file: '',
    })
  }

  //add data
  onSubmit(): any {
    //     this.url=this.newuserForm.value;

    // this.newuserForm.value.file =this.url
    // let d=sessionStorage.getItem('image');
    // this.newuserForm.value.files=d;

    // console.log("before fetch"+this.newuserForm.value.file);
    let i = sessionStorage.getItem('image');
    console.log('session value'+i);
    this.newuserForm.value.file=i;
    console.log('File value'+this.newuserForm.value.file);
    
    



    this.crudService.AddUser(this.newuserForm.value)
      .subscribe((d) => {
        console.log('File value' + this.newuserForm.value.file);

        console.log('Data added successfully!');
        console.log(d);
        //  this.url=d.files;
        console.log("new file" + d.file);


        this.ngZone.run(() => this.router.navigateByUrl('/useraction'))
      }, (err) => {
        console.log(err);
      });
  }

  ngOnInit(): void {
  }

  // file upload
  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url


      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        //store image from base 64 format 
       // console.log("my ts file url is " + this.url);
        sessionStorage.setItem('image', this.url)
        // console.log('File value in onselect'+this.newuserForm.value.file);


      }
    }
  }



  //password validation
  pw = new FormControl('', [Validators.required]);
  vpw = new FormControl('', [Validators.required]);

  getErrorPasswordMessage() {
    // console.log('Password value'+this.pw.value);
    // console.log(' Verify Password value'+this.vpw.value);

    if (this.pw.value != this.vpw.value) {
      return 'Password not match ';
    }


    // return this.name.hasError('name') ? 'Not a valid email' : '';
    return;
  }



}



