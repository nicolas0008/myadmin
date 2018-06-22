import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements AfterViewInit {

    @Input() chats;
    @Output() onActiveChat = new EventEmitter();

    avatar = '../assets/user-image.jpg';

    constructor() {
    }

    ngAfterViewInit() {
    }

    setActiveChat(chat) {
        this.onActiveChat.emit(chat);
    }

}
