import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleCategoryDetailComponent } from './sale-category-detail.component';

describe('SaleCategoryDetailComponent', () => {
  let component: SaleCategoryDetailComponent;
  let fixture: ComponentFixture<SaleCategoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleCategoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleCategoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
