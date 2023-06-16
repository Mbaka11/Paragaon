import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosSallesPageComponent } from './nos-salles-page.component';

describe('NosSallesPageComponent', () => {
  let component: NosSallesPageComponent;
  let fixture: ComponentFixture<NosSallesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosSallesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosSallesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
