import { Component, OnInit } from '@angular/core';
import { CARDS_HELPERS } from './helpers.data';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
    // tslint:disable-next-line:member-ordering
    cardsHelpers: any = CARDS_HELPERS;
}
