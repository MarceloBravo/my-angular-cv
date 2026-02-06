import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit, OnDestroy {
  isMenuOpen = false;
  isOnTop: boolean = true;
  private scrollListener?: () => void;
  rutaActual: String | null = null;

  constructor(private route: Router) {
    this.rutaActual = this.route.url;
  }
  
  
  ngOnInit() {
    this.scrollListener = this.checkScroll.bind(this);
    window.addEventListener('scroll', this.scrollListener);
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  } 
  
  checkScroll() {
    this.isOnTop = window.scrollY === 0;
  }
}
