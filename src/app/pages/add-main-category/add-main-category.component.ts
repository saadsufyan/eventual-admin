import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MainCategoryService } from 'app/services/main-category/main-category.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { SharedServiceService } from 'app/services/sharedService/shared-service.service';
import { ActivatedRoute } from '@angular/router';
import { DatepickerOptions } from 'ng2-datepicker';

@Component({
  selector: 'app-add-main-category',
  templateUrl: './add-main-category.component.html',
  styleUrls: ['./add-main-category.component.scss'],
  providers: [SharedServiceService, MainCategoryService]
})
export class AddMainCategoryComponent implements OnInit, OnDestroy {
  category = new FormGroup({
    name: new FormControl(''),
    name_arabic: new FormControl(''),
    image: new FormControl(null),
    date: new FormControl('')
  });
  CategoryId;
  CategoryData;
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
    this.CategoryData = this.sharedService.fetchData();
    console.log(this.CategoryData);
    if (this.CategoryData) {
      this.CategoryId = this.CategoryData.id;
      this.category.patchValue({
        name: this.CategoryData.name,
        name_arabic: this.CategoryData.name_arabic
      })
    }
  }
  ngOnDestroy(): void {
    this.sharedService.sendData(null);
  }
  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.category.get('image').setValue(file);
    }
  }
  dateSelected() {
    // tslint:disable-next-line:prefer-const
    let d = new Date(this.category.controls.date.value),
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
    formData.append('image', this.category.get('image').value)
    formData.append('name', this.category.get('name').value)
    formData.append('name_arabic', this.category.get('name_arabic').value)
    formData.append('date', this.dateSelected() );

    if (this.CategoryData) {
      console.log('update called')
      formData.append('id', this.CategoryId)
      console.log('submit data ', this.category.value);
      this.categoryService.updateMainCategory(formData).subscribe(res => {
        console.log('category add', res);
        this.spinner.hide();
        this.toastr.success('Category has been updated successfully', 'Category Updated');
      }, err => {
        console.log(err);
        this.spinner.hide();
        if (err.status === 200) {
          this.toastr.success('Category has been updated successfully', 'Category Updated');
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
        this.toastr.success('Category has been added successfully', 'Category Added');
      }, err => {
        console.log(err);
        this.spinner.hide();
        if (err.status === 200) {
          this.toastr.success('Category has been added successfully', 'Category Added');
        } else {
          this.toastr.error('Something went wrong', 'Failure', {
            timeOut: 3000
          });
        }
      })
    }
  }

}
