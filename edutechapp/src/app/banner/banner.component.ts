import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
isShown8:boolean=false;
toggleShow8(){
  this.isShown8=!this.isShown8;
}
isShown7:boolean=false;
toggleShow7(){
  this.isShown7=!this.isShown7;
}
isShown6:boolean=false;
toggleShow6(){
  this.isShown6=!this.isShown6;
}
isShown5:boolean=false;
toggleShow5(){
  this.isShown5=!this.isShown5;
}
isShown4:boolean=false;
toggleShow4(){
  this.isShown4=!this.isShown4;
}
isShown3:boolean=false;
toggleShow3(){
  this.isShown3=!this.isShown3;
}
isShown2:boolean=false;
toggleShow2(){
  this.isShown2=!this.isShown2;
}
isShown1:boolean=false;
toggleShow1(){
  this.isShown1=!this.isShown1;
}
}
/*isShown:boolean=false;
toggleShow(){
  this.isShown=!this.isShown;
}*/