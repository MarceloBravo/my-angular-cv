import { Component, Input, OnInit } from '@angular/core';
import { PortfolioInterface } from '../../interface/portfolio-interface';
import { Orientation } from '../../enum/orientation';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
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
  descriptionsSanitized: SafeHtml[] = [];
  paragraphSanitized: SafeHtml | null = null;

  constructor(private _sanitizer: DomSanitizer){}


  ngOnInit(): void {
    AOS.init();
  }

  ngOnChanges() {
    if(this.portfolio.description){
      this.descriptionsSanitized = this.portfolio.description.map(desc =>
        this._sanitizer.bypassSecurityTrustHtml(desc)
      );
    }
    if (this.portfolio.paragraph) {
      this.paragraphSanitized = this._sanitizer.bypassSecurityTrustHtml(this.portfolio.paragraph);
    }
  }

}
