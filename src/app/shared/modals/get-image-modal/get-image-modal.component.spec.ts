import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetImageModalComponent } from './get-image-modal.component';

describe('GetImageModalComponent', () => {
  let component: GetImageModalComponent;
  let fixture: ComponentFixture<GetImageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetImageModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetImageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
