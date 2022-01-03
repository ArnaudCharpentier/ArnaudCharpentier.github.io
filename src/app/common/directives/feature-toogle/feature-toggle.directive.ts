import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import { environment } from './../../../../environments/environment';

@Directive({
  selector: '[featureToggle]'
})
export class FeatureToggleDirective implements OnInit {
  @Input() featureToggle: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    if (this.isEnabled()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  isEnabled() {
    const features = environment.features;
    if (features['*']) {
      return true;
    }
    return features[this.featureToggle];
  }
}
