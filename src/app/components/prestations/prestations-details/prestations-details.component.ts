import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-prestations-details',
  templateUrl: './prestations-details.component.html',
  styleUrls: ['./prestations-details.component.scss']
})
export class PrestationsDetailsComponent {

  @Input() anchor: string;
  @Input() title: string;
  @Input() icon: string;
  @Input() description: string;
  @Input() footer: string;
  @Input() cssClass: string;

  constructor() {
  }

}
