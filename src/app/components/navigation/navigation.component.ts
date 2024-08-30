import { Component, OnInit } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { CommonModule } from '@angular/common';

import { Environment } from '../../interface/environment.interface';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'beca-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  public env: Environment = environment;

  public mobileMenuDropdown: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.mobileMenuDropdown = false;
      }
    });
  }

  toggleMobileMenuVisibility() {
    this.mobileMenuDropdown = !this.mobileMenuDropdown;
  }
}
