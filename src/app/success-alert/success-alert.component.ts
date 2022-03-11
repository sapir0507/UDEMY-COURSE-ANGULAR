import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-success-alert]',
  /*
      There three selector types:
        selector: 'app-success-alert'   --> <app-success-alert></app-success-alert>
        selector: '[app-success-alert]' --> <div app-success-alert></div>
        selector: '.app-success-alert'  --> <div class="app-success-alert"></div>
  */ 
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.scss']
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
