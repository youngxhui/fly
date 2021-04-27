import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';


@Injectable({
    providedIn: 'root'
})
export class WebsocketService {

    const;
    ws = webSocket('ws://localhost:8080');

    constructor() {
    }


    createObservableSocket(url: string): void {
        this.ws.subscribe(res => {
            console.log(res);
        });
        // this.ws = new WebSocket(url);
        // return new Observable(
        //     observer => {
        //         this.ws.onmessage = (event) => observer.next(event.data);
        //         this.ws.onerror = (event) => observer.error(event);
        //         this.ws.onclose = (event) => observer.complete();
        //     });

    }




}
