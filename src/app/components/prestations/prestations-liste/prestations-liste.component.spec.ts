import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationsListeComponent } from './prestations-liste.component';

describe('PrestationsListeComponent', () => {
  let component: PrestationsListeComponent;
  let fixture: ComponentFixture<PrestationsListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestationsListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestationsListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
