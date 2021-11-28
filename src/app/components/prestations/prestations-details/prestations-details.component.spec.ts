import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationsDetailsComponent } from './prestations-details.component';

describe('PrestationsDetailsComponent', () => {
  let component: PrestationsDetailsComponent;
  let fixture: ComponentFixture<PrestationsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestationsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestationsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
