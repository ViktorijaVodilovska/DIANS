import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBackgroundComponent } from './map-background.component';

describe('MapBackgroundComponent', () => {
  let component: MapBackgroundComponent;
  let fixture: ComponentFixture<MapBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
