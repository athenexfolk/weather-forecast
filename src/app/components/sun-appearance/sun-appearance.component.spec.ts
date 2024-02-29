import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunAppearanceComponent } from './sun-appearance.component';

describe('SunAppearanceComponent', () => {
  let component: SunAppearanceComponent;
  let fixture: ComponentFixture<SunAppearanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SunAppearanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SunAppearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
