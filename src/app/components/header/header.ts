import { Component } from '@angular/core';
import { InfoService } from '../../services/infoService/info-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  pageTitle: String = 'Sobre mí';

  constructor(
      private infoService: InfoService
    ) {}

     ngOnInit() {
        this.pageTitle = this.infoService.getTitle();
      }
}
