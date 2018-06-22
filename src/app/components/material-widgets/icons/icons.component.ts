import { Component, OnInit } from '@angular/core';
import { ICON_HELPERS } from './helpers.data';

@Component({
    selector: 'app-icons',
    templateUrl: './icons.component.html',
    styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    // tslint:disable-next-line:member-ordering
    iconHelpers: any = ICON_HELPERS;

}
