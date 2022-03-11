import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  /*
      There three selector types:
        selector: 'app-servers'   --> <app-servers></app-servers>
        selector: '[app-servers]' --> <div app-servers></div>
        selector: '.app-servers'  --> <div class="app-servers"></div>
  */ 
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false
  serverCreationStatus: string = 'No server was created!'
  serverName: string = ''
  serverCreated: boolean = false


  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer = () => {
    console.log(this.serverName.length)
    if(this.serverName.length > 0){
      this.serverCreated = true;
      this.allowNewServer = false;
      this.serverCreationStatus = 'Server: ' + this.serverName + ' was created!';
      this.serverName = ''
    }
  }

  onChange = () => {
    if(this.serverName.length > 0){
      this.allowNewServer = true;
    }
  }

  onUpdateServerName = (event: Event) => {
    this.serverName = (<HTMLInputElement>event.target).value;
    if(this.serverName === '')
    {
      this.serverCreated = false
    }
    
  }

}
