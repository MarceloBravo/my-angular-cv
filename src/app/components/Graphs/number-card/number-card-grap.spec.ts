import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberCardGraph } from './number-card-grap';

describe('NumberCardGraph', () => {
  let component: NumberCardGraph;
  let fixture: ComponentFixture<NumberCardGraph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberCardGraph]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberCardGraph);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
