import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedProductCardComponent } from './shared-product-card.component';

describe('SharedProductCardComponent', () => {
  let component: SharedProductCardComponent;
  let fixture: ComponentFixture<SharedProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedProductCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
