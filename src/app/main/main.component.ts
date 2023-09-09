import { Component , OnInit} from '@angular/core';
import {User} from "./User";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  submitted = false;
  countries=['eg','ksa','uae','qtr'];
user = new User('Angular','Angoular@domain.com','male','eg');

  constructor() {
  }
  edit(){
    this.submitted=true;
  }
  update(){
    this.submitted=false;
  }
  ngOnInit() {
  }




}



