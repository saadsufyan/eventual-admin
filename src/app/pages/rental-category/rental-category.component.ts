import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import {Router} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MainCategoryService } from 'app/services/main-category/main-category.service';
import { ToastrService } from 'ngx-toastr';
import { SharedServiceService } from 'app/services/sharedService/shared-service.service';

@Component({
  selector: 'app-rental-category',
  templateUrl: './rental-category.component.html',
  styleUrls: ['./rental-category.component.scss']
})
export class RentalCategoryComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  items = [];
  dtTrigger = new Subject();

  constructor(
    private router: Router,
    public mainCategoryServiceApi: MainCategoryService,
    private toastr: ToastrService,
    private sharedService: SharedServiceService,
    private spinner: NgxSpinnerService) { }

    ngOnInit() {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 25
      };
      this.getRentalCategories();
    }

    getRentalCategories() {
      this.spinner.show();
      this.mainCategoryServiceApi.getAllRentalCategory()
        .subscribe((res: any) => {
          this.spinner.hide();
          this.items = res;
          console.log('categories ', this.items);
          // Calling the DT trigger to manually render the table
          this.dtTrigger.next();
        });
    }
    navigateAddCategory() {
      this.router.navigateByUrl('/rental-category-detail');
    }
    onUpdate(id) {
      const index = this.items.findIndex(x => x.id === id);
      if (id) {
        this.sharedService.sendData(this.items[index]);
      }
      this.router.navigateByUrl('/rental-category-detail?id=' + id);
    }
    ngOnDestroy(): void {
      // Do not forget to unsubscribe the event
      this.dtTrigger.unsubscribe();
    }
    deleteMainCategory(id) {
      this.spinner.show()
      const data = {
        id: id
      }
      this.mainCategoryServiceApi.deleteRentalCategory(data).subscribe(res => {
        console.log(res);
        this.spinner.hide();
        this.toastr.success('Rental Product has been deleted successfully', 'Rental Product deleted');
      }, err => {
        console.log(err);
        this.spinner.hide();
        if (err.status === 200) {
          this.toastr.success('Rental Product has been deleted successfully', 'Rental Product deleted');
        } else {
          this.toastr.error('Something went wrong', 'Failure', {
            timeOut: 3000
          });
      }
    })
    this.dtTrigger.unsubscribe();
    this.getRentalCategories()
  }
}
