import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { PrestationsListeComponent } from './components/prestations/prestations-liste/prestations-liste.component';
import { PrestationsDetailsComponent } from './components/prestations/prestations-details/prestations-details.component';
import { FooterComponent } from './common/footer/footer.component';
import { SharedModule } from './common/pipe/shared.module';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemoignageComponent } from './components/temoignage/temoignage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ContactService} from "./common/services/contact.service";
import { FeatureToggleDirective } from './common/directives/feature-toogle/feature-toggle.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    PrestationsListeComponent,
    PrestationsDetailsComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    TemoignageComponent,
    FeatureToggleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
