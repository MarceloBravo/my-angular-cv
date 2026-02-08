import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenceCoursesCard } from './sence-courses-card';

describe('SenceCoursesCard', () => {
  let component: SenceCoursesCard;
  let fixture: ComponentFixture<SenceCoursesCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenceCoursesCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenceCoursesCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
