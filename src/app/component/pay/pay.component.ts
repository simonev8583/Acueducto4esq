import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pay',
  templateUrl: './pay.component.html',
  styleUrls: ['../../app.component.scss']


})

export class PayComponent implements OnInit {
  public title: string;

  constructor() {
    this.title = ''
  }

  ngOnInit() {
    console.log('pay.component cargado!!');
  }

}
