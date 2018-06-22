import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from '../../app.module';
import { ExampleModule } from './example.module';
import { ExampleComponent } from './example.component';
import { ExampleSandbox } from '../../shared/sandbox/example.sandbox';

describe('CntExampleComponentComponent', () => {
    let component: ExampleComponent;
    let fixture: ComponentFixture<ExampleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule, ExampleModule],
            providers: [
                {
                    provide: ExampleSandbox,
                    useClass: ExampleSandbox
                }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
