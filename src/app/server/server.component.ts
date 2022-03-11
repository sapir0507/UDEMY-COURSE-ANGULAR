import { Component, Injector } from "@angular/core";
import { inject } from "@angular/core/testing";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.scss']
})
export class ServerComponent{
    id: number = 0;
    serverStatus: string;
    constructor() {
        this.id = 10;
        this.serverStatus = (Math.random()) > 0.5 ? "offline" : "online";
    }

    getServerStatus = () => {
        return this.serverStatus;
    }

    getColor = () => {
        return this.serverStatus === 'online'? 'green' : 'red'
    }
    
}
