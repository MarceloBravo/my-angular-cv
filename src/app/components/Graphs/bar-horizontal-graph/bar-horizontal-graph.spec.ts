import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarHorizontalGraph } from './bar-horizontal-graph';

describe('BarHorizontalGraph', () => {
  let component: BarHorizontalGraph;
  let fixture: ComponentFixture<BarHorizontalGraph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarHorizontalGraph]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarHorizontalGraph);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
