import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalEducation } from './formal-education';

describe('FormalEducation', () => {
  let component: FormalEducation;
  let fixture: ComponentFixture<FormalEducation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormalEducation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormalEducation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
