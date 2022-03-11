import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-user-name',
  templateUrl: './reset-user-name.component.html',
  styleUrls: ['./reset-user-name.component.scss']
})
export class ResetUserNameComponent implements OnInit {
  userName: string = ''
  isUserNameEmpty: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  onUserNameChange = () => {
    if(this.userName === '')
    {
      this.isUserNameEmpty = true;
    }
    else if (this.userName && this.userName.length > 0){
      this.isUserNameEmpty = false;
    }
  }

  onClick = () => {
    this.userName = ''
  }
}
