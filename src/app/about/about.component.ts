import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    /**
     * 
     */
    public env: {[key: string]: any} = environment;

    constructor(private titling: Title) { }

    ngOnInit(): void {
        this.titling.setTitle([this.env.site.name, ' | ', 'About Us'].join(''));
    }

}
