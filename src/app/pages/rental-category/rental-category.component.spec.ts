import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalCategoryComponent } from './rental-category.component';

describe('RentalCategoryComponent', () => {
  let component: RentalCategoryComponent;
  let fixture: ComponentFixture<RentalCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
