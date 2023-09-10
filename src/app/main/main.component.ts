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

  url='https://jsonplaceholder.typicode.com/users';
  ngOnInit() {

    const  options ={
      headers : {
        'content-type':'application/json; charst=UTF-8','token':'MyToken'
      },
      params: {
        'myUser' :1,
        'myData' : 'data'
      }
    };

    this.message=null ;
    this.http.get(this.url,options)
      .subscribe(
        data=>{
          console.log(data);
         this.mydata = data;

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



