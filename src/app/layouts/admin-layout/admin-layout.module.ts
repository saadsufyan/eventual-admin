import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { NgDatepickerModule } from 'ng2-datepicker';


import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { CategoryComponent } from '../../pages/category/category.component';
import { AddMainCategoryComponent } from '../../pages/add-main-category/add-main-category.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RentalCategoryComponent } from 'app/pages/rental-category/rental-category.component';
import { RentalCategoryDetailComponent } from 'app/pages/rental-category-detail/rental-category-detail.component';
import { SaleCategoryComponent } from 'app/pages/sale-category/sale-category.component';
import { SaleCategoryDetailComponent } from 'app/pages/sale-category-detail/sale-category-detail.component';
import { ServiceCategoryComponent } from 'app/pages/service-category/service-category.component';
import { ServiceCategoryDetailComponent } from 'app/pages/service-category-detail/service-category-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    NgxDatatableModule,
    DataTablesModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgxDaterangepickerMd.forRoot(),
    NgDatepickerModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    CategoryComponent,
    AddMainCategoryComponent,
    RentalCategoryComponent,
    RentalCategoryDetailComponent,
    SaleCategoryComponent,
    SaleCategoryDetailComponent,
    ServiceCategoryComponent,
    ServiceCategoryDetailComponent
  ]
})

export class AdminLayoutModule {}
