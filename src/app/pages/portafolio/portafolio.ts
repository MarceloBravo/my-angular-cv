import { Component } from '@angular/core';
import { PortfolioInterface } from '../../interface/portfolio-interface';
import { Portfolio as PortfolioService } from '../../services/portfolio/portfolio';
import { PortfolioCard } from '../../components/portfolio-card/portfolio-card';
import { Orientation } from '../../enum/orientation';

@Component({
  selector: 'app-portafolio',
  imports: [PortfolioCard],
  templateUrl: './portafolio.html',
  styleUrl: './portafolio.scss',
})
export class Portafolio {

  portafolio: PortfolioInterface[] = [];
  Orientation = Orientation;

  constructor(private portfolioService: PortfolioService) {
    this.portafolio = this.portfolioService.getPortfolio();
    console.log(this.portafolio);
  }

}
