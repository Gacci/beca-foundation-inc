import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-scholarships',
  templateUrl: './scholarships.component.html',
  styleUrls: ['./scholarships.component.scss']
})
export class ScholarshipsComponent implements OnInit {
    /**
     * 
     */
    private now = new Date();

    /**
     * 
     */
    public period: {[key: string]: any} = {};

    /**
     * 
     */
    public env: {[key: string]: any} = environment;

    /**
     * 
     * @param titling 
     */
    constructor(private titling: Title) { }


    ngOnInit(): void {
        this.titling.setTitle([this.env.site.name, ' | ', 'Scholarships'].join(''));

        const now = new Date();

        this.period.from = new Date(now);
        this.period.from.setMonth(11);

        this.period.to = new Date(now);
        this.period.to.setMonth(13);

        this.period.open = false;
        if ( now >= this.period.from && this.period.to >= now ) {
            this.period.open = true;
        } 
    }


}
