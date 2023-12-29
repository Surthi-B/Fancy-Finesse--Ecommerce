import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyPageComponent } from './fancy-page.component';

describe('FancyPageComponent', () => {
  let component: FancyPageComponent;
  let fixture: ComponentFixture<FancyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FancyPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FancyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
