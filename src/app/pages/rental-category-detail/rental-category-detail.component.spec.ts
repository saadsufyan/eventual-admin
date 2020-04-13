import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalCategoryDetailComponent } from './rental-category-detail.component';

describe('RentalCategoryDetailComponent', () => {
  let component: RentalCategoryDetailComponent;
  let fixture: ComponentFixture<RentalCategoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalCategoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalCategoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
