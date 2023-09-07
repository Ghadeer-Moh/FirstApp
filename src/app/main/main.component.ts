import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit{
  show = true;
  names=["ahmed" , "omar" ,"mohammed"];
  // switch_exp="omar"
  // mycard=true
  // mystyle={
  //   "background":"red",
  //   "color":'white',
  //   "width":"10%",
  //   "height":"50px"
  // }

 // input = 'Angular Framework';
  select="Angular"

  constructor() {
  }

  ngOnInit() {
  }

}
