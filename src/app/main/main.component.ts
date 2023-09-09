import { Component , OnInit} from '@angular/core';
import {User} from "./User";
import { FormBuilder } from "@angular/forms";
import  { Validators} from "@angular/forms";
import  { FormArray} from "@angular/forms";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  myModel = this.fb.group({
    firstname:['default value',Validators.required],
    lastname:['',Validators.required],
    subinfo:this.fb.group({
      address:['',Validators.required],
      zipcode:['',Validators.required],
    }),
    myinfo: this.fb.array([
      this.fb.control('ssasd',Validators.required)
    ])


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

  addInput(){
       this.myinfo.push(this.fb.control('test1',Validators.required));
  }
  deleteInput(i:number){
    this.myinfo.removeAt(i);

  }
  constructor(private  fb: FormBuilder) {
    console.log(this.myModel.get('firstname'));
    // this.firstname.setValue('Angular');
  }
  get myinfo(){
    return this.myModel.get('myinfo') as FormArray;
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



