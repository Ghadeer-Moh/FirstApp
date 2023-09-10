import { Component , OnInit} from '@angular/core';
import {User} from "./User";
import { FormBuilder } from "@angular/forms";
import  { Validators} from "@angular/forms";
import  { FormArray} from "@angular/forms";
import {HttpClient,
  HttpErrorResponse} from "@angular/common/http";



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  mydata:any;
  message:any = null;
  constructor(private  http: HttpClient) {


  }
  body ={

    title: 'My Title',

  }
  url='https://jsonplaceholder.typicode.com/posts/1';
  ngOnInit() {
    this.message=null ;
    this.http.delete(this.url)
      .subscribe(
        data=>{
          console.log(data);
        //  this.mydata = data;

        },
        error => {
         if(!error.ok){
           this.message ='No Data';
         }

        }
      )
      // .toPromise()
      // .then(data=>{
      //   console.log(data);
      //   this.mydata=data;
      // }).catch((e: HttpErrorResponse)=>{
      // // console.log(e.ok)
      // if(!e.ok)
      // {
    //     this.message = 'No Data';
    //   }
    // });
  }

}



