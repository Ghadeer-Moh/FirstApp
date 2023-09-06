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
  mycard=true

  constructor() {
  }

  ngOnInit() {
  }

}
