import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rutes-practice';
  constructor(private router: Router) {}
  algo() {
    console.log("hiciste clic")
  }
  isActive(route: string){
    return this.router.url === route
  }
}
