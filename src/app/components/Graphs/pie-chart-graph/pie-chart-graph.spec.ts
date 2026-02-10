import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartGraph } from './pie-chart-graph';

describe('PieChartGraph', () => {
  let component: PieChartGraph;
  let fixture: ComponentFixture<PieChartGraph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieChartGraph]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartGraph);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
