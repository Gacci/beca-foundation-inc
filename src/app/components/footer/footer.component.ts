import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Environment } from '../../interface/environment.interface';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'beca-footer',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    public env: Environment = environment;

    public datetime: Date = new Date;

    constructor() { }

    ngOnInit(): void {
        
    }

}
