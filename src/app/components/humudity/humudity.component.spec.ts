import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumudityComponent } from './humudity.component';

describe('HumudityComponent', () => {
  let component: HumudityComponent;
  let fixture: ComponentFixture<HumudityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumudityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HumudityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
