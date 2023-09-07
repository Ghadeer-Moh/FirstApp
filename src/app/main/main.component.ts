import { Component , OnInit} from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  name: any
  email: any
  age = '';
  show = true

  constructor() {
  }

  ngOnInit() {
  }

// getAge(){
  //     console.log(this.age);
// }
getData(){
    console.log(this.name)
}

}









// show = false;
// names=["ahmed" , "omar" ,"mohammed","angular"];
// switch_exp="omar"
// mycard=true
// mystyle={
//   "background":"red",
//   "color":'white',
//   "width":"10%",
//   "height":"50px"
// }

// input = 'Angular Framework';
//  select="omar"
