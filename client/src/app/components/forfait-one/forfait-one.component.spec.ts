import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitOneComponent } from './forfait-one.component';

describe('ForfaitOneComponent', () => {
    let component: ForfaitOneComponent;
    let fixture: ComponentFixture<ForfaitOneComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ForfaitOneComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ForfaitOneComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
