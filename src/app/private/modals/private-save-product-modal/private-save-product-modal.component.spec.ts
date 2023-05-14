import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateSaveProductModalComponent } from './private-save-product-modal.component';

describe('PrivateSaveProductModalComponent', () => {
  let component: PrivateSaveProductModalComponent;
  let fixture: ComponentFixture<PrivateSaveProductModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateSaveProductModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateSaveProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
