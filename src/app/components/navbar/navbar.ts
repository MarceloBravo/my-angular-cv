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
  isDropdownHomeOpen = false;
  isDropdownCoursesOpen = false;
  private scrollListener?: () => void;
  rutaActual: String | null = null;

  constructor(private route: Router) {
    this.rutaActual = this.route.url;
  }
  
  
  ngOnInit() {
    this.scrollListener = this.checkScroll.bind(this);
    window.addEventListener('scroll', this.scrollListener);
    
    // Cerrar dropdown cuando se hace clic fuera
    document.addEventListener('click', this.handleClickOutside.bind(this));
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
    document.removeEventListener('click', this.handleClickOutside.bind(this));
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.isDropdownHomeOpen = false;
    this.isDropdownCoursesOpen = false;
  } 
  
  toggleDropdownHome(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDropdownHomeOpen = !this.isDropdownHomeOpen;
    this.isDropdownCoursesOpen = false;
  } 
  
  toggleDropdownCourses(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDropdownCoursesOpen = !this.isDropdownCoursesOpen;
    this.isDropdownHomeOpen = false;
  } 
  
  handleClickOutside(event: Event) {
    const target = event.target as Element;
    if (!target.closest('.dropdown')) {
      this.isDropdownHomeOpen = false; 
      this.isDropdownCoursesOpen = false;
    }
  } 
  
  checkScroll() {
    this.isOnTop = window.scrollY === 0;
  }
}
