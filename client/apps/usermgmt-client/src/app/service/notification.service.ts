import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    messageChange: Subject<string> = new Subject<string>();

    constructor() {
    }

    notifySuccess(message: string) {
        this.notify(message);
    }

    private notify(message: string) {
        this.messageChange.next(message);
    }

    clearMessage() {
        this.messageChange.next('');
    }

}
