import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndvancedPieChartGraph } from './andvanced-pie-chart-graph';

describe('AndvancedPieChartGraph', () => {
  let component: AndvancedPieChartGraph;
  let fixture: ComponentFixture<AndvancedPieChartGraph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndvancedPieChartGraph]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndvancedPieChartGraph);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
