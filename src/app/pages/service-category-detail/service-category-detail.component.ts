import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MainCategoryService } from 'app/services/main-category/main-category.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { SharedServiceService } from 'app/services/sharedService/shared-service.service';
import { ActivatedRoute } from '@angular/router';
import { DatepickerOptions } from 'ng2-datepicker';

@Component({
  selector: 'app-service-category-detail',
  templateUrl: './service-category-detail.component.html',
  styleUrls: ['./service-category-detail.component.scss']
})
export class ServiceCategoryDetailComponent implements OnInit, OnDestroy {

  serviceCategory = new FormGroup({
    name: new FormControl(''),
    name_arabic: new FormControl(''),
    short_description: new FormControl(''),
    short_description_arabic: new FormControl(''),
    description: new FormControl(''),
    description_arabic: new FormControl(''),
    main_category_id: new FormControl(0),
    image: new FormControl(null),
    date: new FormControl('')
  });
  CategoryId;
  serviceCategoryId;
  serviceCategoryData;
  mainCategoryList;
  options: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'MMM D[,] YYYY',
    barTitleFormat: 'MMMM YYYY',
    dayNamesFormat: 'dd',
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    barTitleIfEmpty: 'Click to select a date',
    placeholder: 'Click to select a date', // HTML input placeholder attribute (default: '')
    addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
    addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
    fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
    useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown
  };

  constructor(
    private categoryService: MainCategoryService,
    private toastr: ToastrService,
    private sharedService: SharedServiceService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute) {
    }

  ngOnInit() {
    this.getMainCategories();
    this.serviceCategoryData = this.sharedService.fetchData();
    console.log(this.serviceCategoryData);
    if (this.serviceCategoryData) {
      this.serviceCategoryId = this.serviceCategoryData.id;
      this.serviceCategory.patchValue({
        name: this.serviceCategoryData.name,
        name_arabic: this.serviceCategoryData.name_arabic,
        short_description: this.serviceCategoryData.short_description,
        short_description_arabic: this.serviceCategoryData.short_description_arabic,
        description: this.serviceCategoryData.long_description,
        description_arbic: this.serviceCategoryData.description_arabic,
        main_category_id: this.serviceCategoryData.main_category_id,
        image: this.serviceCategoryData.image,
        date: this.serviceCategoryData.date
      })
    }
  }
  ngOnDestroy(): void {
    this.sharedService.sendData(null);
  }
  getMainCategories() {
    this.spinner.show();
    this.categoryService.getAllMainCategory()
      .subscribe((res: any) => {
        this.spinner.hide();
        this.mainCategoryList = res;
        console.log('categories ', this.mainCategoryList);
      });
  }
  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.serviceCategory.get('image').setValue(file);
    }
  }
  dateSelected() {
    // tslint:disable-next-line:prefer-const
    let d = new Date(this.serviceCategory.controls.date.value),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    // tslint:disable-next-line:prefer-const
    year = d.getFullYear();

    if (month.length < 2) { month = '0' + month; }
    if (day.length < 2) { day = '0' + day; }

    return [year, month, day].join('-');
  }
  onSubmit() {
    this.spinner.show();
    const formData = new FormData();
    formData.append('image', this.serviceCategory.get('image').value)
    formData.append('name', this.serviceCategory.get('name').value)
    formData.append('name_arabic', this.serviceCategory.get('name_arabic').value)
    formData.append('short_description', this.serviceCategory.get('short_description').value)
    formData.append('short_description_arabic', this.serviceCategory.get('short_description_arabic').value)
    formData.append('description', this.serviceCategory.get('description').value)
    formData.append('description_arabic', this.serviceCategory.get('description_arabic').value);
    formData.append('main_category_id', this.serviceCategory.get('main_category_id').value);
    formData.append('date', this.dateSelected() );

    if (this.serviceCategoryData) {
      console.log('update called')
      formData.append('id', this.serviceCategoryId)
      console.log('submit data ', this.serviceCategory.value);
      this.categoryService.updateMainCategory(formData).subscribe(res => {
        console.log('category add', res);
        this.spinner.hide();
        this.toastr.success('Product Rental Category has been updated successfully', 'Rental Product Updated');
      }, err => {
        console.log(err);
        this.spinner.hide();
        if (err.status === 200) {
          this.toastr.success('Category has been updated successfully', 'Rental Product Updated');
        } else {
          this.toastr.error('Something went wrong', 'Failure', {
            timeOut: 3000
          });
        }
      })
    } else {
      console.log('create called')
      this.categoryService.createMainCategory(formData).subscribe(res => {
        console.log('category add', res)
        this.spinner.hide();
        this.toastr.success('Product Rental Category has been added successfully', 'Rental Product Added');
      }, err => {
        console.log(err);
        this.spinner.hide();
        if (err.status === 200) {
          this.toastr.success('Product Rental Category has been added successfully', 'Rental Product Added');
        } else {
          this.toastr.error('Something went wrong', 'Failure', {
            timeOut: 3000
          });
        }
      })
    }
  }

}
