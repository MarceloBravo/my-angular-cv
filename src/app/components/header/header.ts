import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  pageTitle: String = 'Sobre mí';

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    // Escuchar cada vez que cambia la URL
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(() => {
        const state = this.location.getState() as { data?: any };
        this.pageTitle = state.data;
      });
  }

}
