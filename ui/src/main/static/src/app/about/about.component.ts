import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public imagesUrl;

  constructor() { 
    
  }

  ngOnInit(): void {
    this.imagesUrl = ['../assets/images/1.jpg', '../assets/images/2.jpg', '../assets/images/1.jpg'];
  }

}
