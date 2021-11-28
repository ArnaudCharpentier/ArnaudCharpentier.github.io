import {Component, OnInit} from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'
import {Testimonials} from "../../common/model/testimonials";


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations:[
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class PortfolioComponent implements OnInit {

  current = 0;

  testimonialsList : Testimonials[] = [
    new Testimonials("Jean-Louis R.", "Un vrai régal d'avoir pu travailler avec CQFD, très pro, je recommande", "Danoune"),
    new Testimonials("Michel P.", "Une approche très pro et didactique, de très bon conseils, une belle expérience de travailler avec Nadège", "Yopli"),
    new Testimonials("Catherine F.", "Quel talent, amaizing, what else...", "Maître poule")
  ]

  ngOnInit() {
    setInterval(() => {
      this.current = ++this.current % this.testimonialsList.length;
    }, 5000);
  }
}
