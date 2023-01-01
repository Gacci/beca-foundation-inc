import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    /**
     * 
     */
    public env: {[key: string]: any} = environment;
    
    /**
     * 
     */
    public selectedDonationAmount: number = 0;
    
    /**
     * 
     * @param titling 
     */
    constructor(private titling: Title) { }


    ngOnInit(): void {
        this.titling.setTitle([this.env.site.name, ' | ', 'Home'].join(''));
    }

    setDonationAmount(amount: number): void {
        this.selectedDonationAmount = amount;
    }
}
