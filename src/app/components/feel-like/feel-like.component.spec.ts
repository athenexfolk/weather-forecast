import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelLikeComponent } from './feel-like.component';

describe('FeelLikeComponent', () => {
  let component: FeelLikeComponent;
  let fixture: ComponentFixture<FeelLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeelLikeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeelLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
