import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['../../app.component.scss']


})

export class HomeComponent implements OnInit {
  public title: string;
  public logo: string;

  constructor() {
    this.title = '';
      this.logo = "./Logo.png";

  }

  ngOnInit() {
    console.log('home.component cargado!!');
  }

}
