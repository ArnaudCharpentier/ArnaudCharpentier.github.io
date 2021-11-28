import {Component, Input, OnInit} from '@angular/core';
import {Testimonials} from "../../common/model/testimonials";

@Component({
  selector: 'app-temoignage',
  templateUrl: './temoignage.component.html',
  styleUrls: ['./temoignage.component.scss']
})
export class TemoignageComponent implements OnInit {

  constructor() { }

  @Input()
  temoignage: Testimonials

  ngOnInit(): void {
  }

}
