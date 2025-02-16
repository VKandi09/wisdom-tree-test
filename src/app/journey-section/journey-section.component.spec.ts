import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneySectionComponent } from './journey-section.component';

describe('JourneySectionComponent', () => {
  let component: JourneySectionComponent;
  let fixture: ComponentFixture<JourneySectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JourneySectionComponent]
    });
    fixture = TestBed.createComponent(JourneySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
