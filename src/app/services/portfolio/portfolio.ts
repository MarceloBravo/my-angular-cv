import { Injectable } from '@angular/core';
import { PortfolioInterface } from '../../interface/portfolio-interface';
// @ts-ignore
import { portfolio } from '../../data/portfolio';

@Injectable({
  providedIn: 'root',
})
export class Portfolio {

  getPortfolio(): PortfolioInterface[] {
    return portfolio;
  }
  
}
