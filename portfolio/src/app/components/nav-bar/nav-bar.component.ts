import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private router: Router) {}

  onLinkClick(event: Event, path: string): void {
    // Check if the clicked link corresponds to the current active route
    if (this.router.url.endsWith(path)) {
      event.preventDefault(); // Prevent navigation
      // Trigger the shake animation
      let target = event.target as HTMLElement;
      target.classList.add('shake');
      // Remove the 'shake' class after the animation duration
      setTimeout(() => target.classList.remove('shake'), 820);
    }
  }
}