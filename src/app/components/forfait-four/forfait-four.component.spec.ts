import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitFourComponent } from './forfait-four.component';

describe('ForfaitFourComponent', () => {
  let component: ForfaitFourComponent;
  let fixture: ComponentFixture<ForfaitFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForfaitFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
