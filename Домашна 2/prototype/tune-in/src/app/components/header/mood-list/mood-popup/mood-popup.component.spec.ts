import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodPopupComponent } from './mood-popup.component';

describe('MoodPopupComponent', () => {
  let component: MoodPopupComponent;
  let fixture: ComponentFixture<MoodPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoodPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
