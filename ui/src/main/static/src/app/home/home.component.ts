import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  itemCount : number = 4;
  btnText : string ='Add New Item';
  goalText: string = 'My first life goal';
  errorMsg : string ="";
  goals = [];
  errFlag : boolean = false;
  constructor() { }


  ngOnInit(): void {
    this.itemCount = this.goals.length;
  }

  addItem():void {
    if(this.goalText!=''){
      this.goals.push(this.goalText);
      this.goalText = '';
      this.itemCount = this.goals.length;
      this.errFlag=false;
      this.errorMsg="";
    }else{
      this.errorMsg ="Please Enter Your Goal.";
      this.errFlag=true;
    }
   }
   removeItem(i) {
    this.goals.splice(i, 1);
    this.itemCount = this.goals.length;
  }
}
