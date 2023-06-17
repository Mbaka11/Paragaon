import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitPageComponent } from './forfait-page.component';

describe('ForfaitPageComponent', () => {
    let component: ForfaitPageComponent;
    let fixture: ComponentFixture<ForfaitPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ForfaitPageComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ForfaitPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
