import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-warning-alert]',
  /*
      There three selector types:
        selector: 'app-warning-alert'   --> <app-warning-alert></app-warning-alert>
        selector: '[app-warning-alert]' --> <div app-warning-alert></div>
        selector: '.app-warning-alert'  --> <div class="app-warning-alert"></div>
  */ 
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.scss']
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
