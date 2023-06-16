import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitTwoComponent } from './forfait-two.component';

describe('ForfaitTwoComponent', () => {
  let component: ForfaitTwoComponent;
  let fixture: ComponentFixture<ForfaitTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForfaitTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
