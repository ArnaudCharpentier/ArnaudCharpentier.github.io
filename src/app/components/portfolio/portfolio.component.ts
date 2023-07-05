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
    new Testimonials("Thomas L.", "Disponibilité et adaptabilité à la fois sur les plannings et les secteurs d'activités. Force de propositions lors de la réalisation des audits.", "TLC-S"),
    new Testimonials("Marcel S.", "Très bonne pro-activité et disponibilité. Des réponses aux problèmes posés. Très pro ! Une réussite de certification à l'audit QUALIOPI. Parfait !", "Augias Holding"),
    new Testimonials("Camille R.", "Merci pour ton support très pro tout au long de ta mission chez nous.", "Eurofins Colmar"),
    new Testimonials("Anne-Pascale G.", "Mme Pioche est très professionnelle et agréable, je recommande ses services sans hésitation.", "Harmonie Mutuelle"),
    new Testimonials("Paul T.", "De réelles qualités d'auditrice: méthode, rigueur, pédagogie. Une connaissance très concrète de l'application de la norme 17025 lui donnant la capacité de conseiller et d'accompagner. Ethique irréprochable, et sa très grande persévérance !", "Eurofins Nantes")
  ]

  ngOnInit() {
    setInterval(() => {
      this.current = ++this.current % this.testimonialsList.length;
    }, 5000);
  }
}
