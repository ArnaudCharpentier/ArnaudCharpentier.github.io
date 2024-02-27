import {Component, AfterViewInit, OnInit} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import * as AOS from 'aos';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private metaTagService: Meta) { }

  ngOnInit() {
    AOS.init({
      duration: 800
    });

    this.metaTagService.addTags([
      { name: 'keywords', content: 'Qualité, Formation, Diagnostic, Diagnostique, Auditeur, Audit, auditeur interne, laboratoire, laboratoire.com, 17025, ISO, 9001, 7218, 22000, Lab GTA, BPL, Qualiopi, Management, Gestion de crises, HACCP, AMDEC, Evaluation des risques, PDCA, SMQ' },
      { name: 'description', content: 'CQFD Qualité vous accompagne dans vos projets d\'amélioration continue, cabinet de conseils, diagnostic et formation en qualité' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Arnaud Charpentier' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]);
  }

  ngAfterViewInit(){
    $(document).ready(function(){
      // Collapse Navbar
      var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
          $("#mainNav").addClass("navbar-shrink");
        } else {
          $("#mainNav").removeClass("navbar-shrink");
        }
      };
      // Collapse now if page is not at top
      navbarCollapse();
      // Collapse the navbar when page is scrolled
      $(window).scroll(navbarCollapse);
    });
  }

}
