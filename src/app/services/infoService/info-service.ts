import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  pageTitle: String = 'Sobre mí';

  getTitle(): String{
    return this.pageTitle;
  }
  
}
