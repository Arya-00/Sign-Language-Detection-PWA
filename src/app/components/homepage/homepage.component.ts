import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-homepage',
	imports: [MatIconModule, RouterLink, MatButtonModule],
	templateUrl: './homepage.component.html',
	styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
	router = inject(Router);
	navigate() {
		this.router.navigate(['/search']);
	}
}
