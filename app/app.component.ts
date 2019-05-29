import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'github';
  showParaOne: boolean;
  showParaTwo: boolean;
  showParaThree: boolean;
  constructor(){
    this.showParaOne = true;
    this.showParaTwo = true;
    this.showParaThree = false;
  }

  togglePara() {
    this.showParaOne = !this.showParaOne;
    this.showParaTwo = !this.showParaTwo;
    this.showParaThree = !this.showParaThree;
  }

  ngOnInit() {
  }
}