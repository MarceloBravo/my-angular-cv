import { Component, Input, OnInit } from '@angular/core';
import { PortfolioInterface } from '../../interface/portfolio-interface';
import { Orientation } from '../../enum/orientation';
import AOS from 'aos';

@Component({
  selector: 'app-portfolio-card',
  imports: [],
  templateUrl: './portfolio-card.html',
  styleUrl: './portfolio-card.scss',
})
export class PortfolioCard implements OnInit {
  @Input() portfolio: PortfolioInterface = {} as PortfolioInterface;
  @Input() orientation: Orientation = Orientation.right;
  Orientation = Orientation;

  ngOnInit(): void {
    AOS.init();
  }

}
