import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitThreeComponent } from './forfait-three.component';

describe('ForfaitThreeComponent', () => {
  let component: ForfaitThreeComponent;
  let fixture: ComponentFixture<ForfaitThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForfaitThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
