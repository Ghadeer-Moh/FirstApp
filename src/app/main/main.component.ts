import { Component , OnInit} from '@angular/core';
import {User} from "./User";
import { FormGroup ,FormControl} from "@angular/forms";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  myModel = new FormGroup({
    firstname: new FormControl(''),
     lastname: new FormControl(''),

  });
//   submitted = false;
//   countries=['eg','ksa','uae','qtr'];
// user = new User('Angular','Angoular@domain.com','male','eg');

  constructor() {
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

  update(){
    // this.firstname.setValue('Angular');
    this.myModel.patchValue({
      firstname: 'Angular',
      lastname: 'Framework',
    })
  }


}



