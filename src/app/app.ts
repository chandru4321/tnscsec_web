import { Component, inject, signal } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  router = inject(Router);

  // signal to hide/show header & footer
  hideLayout = signal(false);

  constructor() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        const url = event.urlAfterRedirects.toLowerCase();

        // Hide header & footer ONLY on /testlink
        this.hideLayout.set(url.includes('complaintregister'));
                this.hideLayout.set(url.includes('admin'));

      }
    });
  }
}


