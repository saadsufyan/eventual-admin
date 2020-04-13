import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleCategoryComponent } from './sale-category.component';

describe('SaleCategoryComponent', () => {
  let component: SaleCategoryComponent;
  let fixture: ComponentFixture<SaleCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
