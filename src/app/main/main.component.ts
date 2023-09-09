import { Component , OnInit} from '@angular/core';
import {User} from "./User";
import { FormBuilder } from "@angular/forms";
import  { Validators} from "@angular/forms";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  myModel = this.fb.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    subinfo:this.fb.group({
      address:['',Validators.required],
      zipcode:['',Validators.required],
    })


  })
  //   firstname: new FormControl(''),
  //    lastname: new FormControl(''),
  //   subinfo: new FormGroup({
  //     address: new FormControl(''),
  //     zipcode: new FormControl(),
  //   })
  //
  // });
//   submitted = false;
//   countries=['eg','ksa','uae','qtr'];
// user = new User('Angular','Angoular@domain.com','male','eg');

  constructor(private  fb: FormBuilder) {
    // this.firstname.setValue('Angular');
  }
  // edit(){
  //   this.submitted=true;
  // }
  // update(){
  //   this.submitted=false;
  // }
  ngOnInit() {
  }

  update()
{
  // console.warn(this.myModel.value)
  // this.firstname.setValue('Angular');
  // console.log(this.myModel.value)
  this.myModel.patchValue({
    firstname: 'Angular',
    lastname: 'Framework',
    subinfo: {
      address: 'test',
      zipcode: '123'
    }
  });
}


}



