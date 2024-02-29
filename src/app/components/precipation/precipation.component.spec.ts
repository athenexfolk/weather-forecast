import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecipationComponent } from './precipation.component';

describe('PrecipationComponent', () => {
  let component: PrecipationComponent;
  let fixture: ComponentFixture<PrecipationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrecipationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrecipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
