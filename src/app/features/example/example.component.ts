import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { ExampleSandbox } from '../../shared/sandbox/example.sandbox';


@Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit, OnDestroy {
    private subscriptions = new Set<Subscription>();

    title: string;
    exampleForm: FormGroup;

    constructor(private exampleSandbox: ExampleSandbox, private fb: FormBuilder) {
        this.createForm();

        this.subscriptions.add(
            this.exampleSandbox.getExampleTitle().subscribe(title => {
                this.exampleForm.setValue({
                    title: title
                });
            })
        );
    }

    ngOnInit() {
        this.exampleSandbox.setExampleTitle('titulo!');
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(subs => subs.unsubscribe());
    }

    getHttpExampleTitle() {
        this.exampleSandbox.loadRandomUser();
    }

    onSubmit() {

    }

    private createForm() {
        this.exampleForm = this.fb.group({
            title: ['', ]
        });
    }
}
