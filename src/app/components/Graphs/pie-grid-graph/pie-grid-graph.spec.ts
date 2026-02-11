import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieGridGraph } from './pie-grid-graph';

describe('PieGridGraph', () => {
  let component: PieGridGraph;
  let fixture: ComponentFixture<PieGridGraph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieGridGraph]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieGridGraph);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
