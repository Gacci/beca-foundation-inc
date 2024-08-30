import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Environment } from '../interface/environment.interface';
import { DateRange } from '../interface/date-range.interface';

import { environment } from '../../environments/environment';



@Component({
    imports: [CommonModule, DatePipe],
  selector: 'app-scholarships',
  standalone: true,
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
    public generalScholarshipPeriod: DateRange = {};

    /**
     * 
     */
    protected newellScholarshipPeriod: DateRange = {};

    /**
     * 
     */
    protected env: Environment = environment;

    /**
     * 
     */
    protected isGeneralScholarshipOpen: boolean = false;

    /**
     * 
     */
    protected isNewellScholarshipOpen: boolean = false;

    /**
     * 
     * @param titling 
     */
    constructor(private titling: Title) { }


    ngOnInit(): void {
        this.titling.setTitle(`${this.env.siteName} | Home`);


        this.generalScholarshipPeriod.from = new Date(this.now.getFullYear(), 0, 6, 0, 0, 0, 0);
        this.generalScholarshipPeriod.to = new Date(this.now.getFullYear(), 2, 30, 23, 59, 59, 999)
        this.isGeneralScholarshipOpen = 
            this.now >= this.generalScholarshipPeriod.from && this.generalScholarshipPeriod.to >= this.now;


        this.newellScholarshipPeriod.from = new Date(this.now.getFullYear(), 8, 3, 0, 0, 0, 0);
        this.newellScholarshipPeriod.to = new Date(this.now.getFullYear(), 10, 1, 23, 59, 59, 999)
        this.isNewellScholarshipOpen = 
            this.now >= this.generalScholarshipPeriod.from && this.generalScholarshipPeriod.to >= this.now;

            console.log(this.generalScholarshipPeriod);
    }


}
