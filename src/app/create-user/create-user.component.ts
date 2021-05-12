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
  url:any='';


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
        password: '',
        file:'',
      })
     }

     //add data
     onSubmit(): any {
       this.url=this.newuserForm.value;

      this.crudService.AddUser(this.newuserForm.value)
        .subscribe((d) => {
          console.log('Data added successfully!');
          console.log(d);
          
          this.ngZone.run(() => this.router.navigateByUrl('/useraction'))
        }, (err) => {
          console.log(err);
        });
    }

  ngOnInit(): void {

  }




  //file upload

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        //store image from base 64 format 
        console.log("my ts file url is "+this.url);

      }
    }
  }

  // onSelectFile(event:any) {
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();
  
  //     reader.onload = (event: ProgressEvent) => {
  //       this.url = (<FileReader>event.target).result;
  //     }
  
  //     reader.readAsDataURL(event.target.files[0]);
  //   }
  // }


}
