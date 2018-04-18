import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['../../app.component.scss']


})

export class HomeComponent implements OnInit {
  public title: string;

  constructor() {
    this.title = ''
  }

  ngOnInit() {
    console.log('component.home cargado!!');
  }

}
