import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { CategoryComponent } from '../../pages/category/category.component';
import { AddMainCategoryComponent } from 'app/pages/add-main-category/add-main-category.component';
import { SaleCategoryComponent } from 'app/pages/sale-category/sale-category.component';
import { SaleCategoryDetailComponent } from 'app/pages/sale-category-detail/sale-category-detail.component';
import { RentalCategoryComponent } from 'app/pages/rental-category/rental-category.component';
import { RentalCategoryDetailComponent } from 'app/pages/rental-category-detail/rental-category-detail.component';
import { ServiceCategoryComponent } from 'app/pages/service-category/service-category.component';
import { ServiceCategoryDetailComponent } from 'app/pages/service-category-detail/service-category-detail.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'category',      component: CategoryComponent },
    { path: 'category-detail',      component: AddMainCategoryComponent },
    { path: 'sale-category',      component: SaleCategoryComponent },
    { path: 'sale-category-detail',      component: SaleCategoryDetailComponent },
    { path: 'rental-category',      component: RentalCategoryComponent },
    { path: 'rental-category-detail',      component: RentalCategoryDetailComponent },
    { path: 'service-category',      component: ServiceCategoryComponent },
    { path: 'service-category-detail',      component: ServiceCategoryDetailComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent }
];
