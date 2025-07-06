import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightsaberDividerComponent } from './lightsaber-divider.component';

describe('LightsaberDividerComponent', () => {
  let component: LightsaberDividerComponent;
  let fixture: ComponentFixture<LightsaberDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightsaberDividerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightsaberDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
