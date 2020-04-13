import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCategoryDetailComponent } from './service-category-detail.component';

describe('ServiceCategoryDetailComponent', () => {
  let component: ServiceCategoryDetailComponent;
  let fixture: ComponentFixture<ServiceCategoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceCategoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCategoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
