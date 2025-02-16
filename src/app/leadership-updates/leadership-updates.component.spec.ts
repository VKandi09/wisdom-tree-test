import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipUpdatesComponent } from './leadership-updates.component';

describe('LeadershipUpdatesComponent', () => {
  let component: LeadershipUpdatesComponent;
  let fixture: ComponentFixture<LeadershipUpdatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadershipUpdatesComponent]
    });
    fixture = TestBed.createComponent(LeadershipUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
