import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedViewProductModalComponent } from './shared-view-product-modal.component';

describe('SharedViewProductModalComponent', () => {
  let component: SharedViewProductModalComponent;
  let fixture: ComponentFixture<SharedViewProductModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedViewProductModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedViewProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
