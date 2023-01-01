import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from 'projects/BECA/src/environments/environment';

@Component({
  selector: 'beca-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    public env: {[key: string]: any} = environment;

    public mobileMenuDropdown: boolean;

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
