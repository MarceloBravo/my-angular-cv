import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalBarGraph } from './vertical-bar-graph';

describe('VerticalBarGraph', () => {
  let component: VerticalBarGraph;
  let fixture: ComponentFixture<VerticalBarGraph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalBarGraph]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalBarGraph);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
