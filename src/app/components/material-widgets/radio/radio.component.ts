import { Component, OnInit } from '@angular/core';
import { RADIO_HELPERS } from './helpers.data';

@Component({
    selector: 'app-radio',
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }


    // tslint:disable-next-line:member-ordering
    favoriteSeason: string;

    // tslint:disable-next-line:member-ordering
    seasons = [
        'Winter',
        'Spring',
        'Summer',
        'Autumn',
    ];

    // tslint:disable-next-line:member-ordering
    radioHelpers: any = RADIO_HELPERS;
}




