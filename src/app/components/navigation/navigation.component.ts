import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Environment } from '../../interface/environment.interface';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'beca-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    public env: Environment = environment;

    public mobileMenuDropdown: boolean = false;

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.router.events.subscribe((event) => {
            if ( event instanceof NavigationEnd ) {
                this.mobileMenuDropdown = false;
            }
        });
    }

    toggleMobileMenuVisibility(event: Event) {
        this.mobileMenuDropdown = !this.mobileMenuDropdown;
    }
}
