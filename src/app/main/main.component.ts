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
  // data=['a','b','c']
  // myDate = new Date();
  // // myModel:any;



  constructor(private  fb: FormBuilder) {

  }

  ngOnInit() {
   // this.myModel = this.fb.group({
   //   firstname:['',[
   //     Validators.required,
   //    // Validators.minLength(5),
   //    //  Validators.min(0),
   //    //  Validators.max(10),
   //     Validators.email
   //
   //   ]],
   //  });
  }
  // get firstname(){
  //   return this.myModel.get('firstname')
  // }

}



