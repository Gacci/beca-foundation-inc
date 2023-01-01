import { Component, OnInit } from '@angular/core';
import { environment } from 'projects/BECA/src/environments/environment';

@Component({
  selector: 'beca-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    public env: {[key: string]: any} = environment;

    public datetime: Date = new Date;

    constructor() { }

    ngOnInit(): void {
        
    }

}
