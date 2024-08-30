import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { Environment } from '../../interface/environment.interface';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'beca-footer',
  standalone: true,
  imports: [DatePipe, RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public env: Environment = environment;

  public datetime: Date = new Date();
}
