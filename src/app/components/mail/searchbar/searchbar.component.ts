import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-mail-searchbar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {

    inputValue;

    @Input() placeholder = '查找...';
    @Input() delay = 200;
    @Output() onSearch = new EventEmitter();
    @Output() onSearchChange = new EventEmitter();

    constructor(private elementRef: ElementRef) {
        const event$ = Observable.fromEvent(elementRef.nativeElement, 'keyup')
            .map(() => this.inputValue)
            .debounceTime(this.delay)
            .distinctUntilChanged();
        event$.subscribe(input => this.onSearchChange.emit(input));
    }

    enterUp() {
        this.onSearch.emit(this.inputValue);
    }

}
