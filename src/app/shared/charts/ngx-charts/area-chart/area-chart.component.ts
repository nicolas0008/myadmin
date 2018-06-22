import { Component, ElementRef, ViewChild, OnInit, DoCheck } from '@angular/core';
import { single, multi } from './data';

@Component({
    selector: 'app-area-chart',
    templateUrl: './area-chart.component.html',
    styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements OnInit, DoCheck {

    @ViewChild('ele') el: ElementRef;
    public showYAxisLabel;
    public showYAxis;
    public showXAxis;
    public autoScale;
    public showXAxisLabel;
    public xAxisLabel;
    public yAxisLabel;
    public gradient;

    public single: any[];
    public multi: any[];
    public showLegend = false;
    public colorScheme = {
        domain: ['#EC407A', '#26C6DA', '#AB47BC']
    };
    public showLabels = false;
    public explodeSlices = false;
    public doughnut = true;
    public view: any[] = [];
    public width: number;

    constructor() { }

    ngDoCheck() {
        if (this.el.nativeElement.offsetWidth !== this.width) {
            this.width = this.el.nativeElement.offsetWidth;
            this.ngOnInit();
        }
    }

    ngOnInit() {
        this.view = [this.el.nativeElement.offsetWidth, 235];
        Object.assign(this, { single, multi });
    }

    onSelect(event) {
        console.log(event);
    }
}