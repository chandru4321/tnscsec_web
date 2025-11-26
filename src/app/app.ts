import { Component, inject, signal } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  router = inject(Router);

  hideLayout = signal(false);

  constructor() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        const url = event.urlAfterRedirects.toLowerCase();

        this.hideLayout.set(
          url.includes('complaintregister') ||
          url.includes('admin') ||
          url.includes('complaintasigning') ||
          url.includes('login')||
          url.includes('takeaction')||
          url.includes('viewuser')
        );

      }
    });
  }

}







