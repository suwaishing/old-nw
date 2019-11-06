import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaryRoutingModule } from './salary-routing.module';
import { SalaryComponent } from './salary.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { RegionComponent } from './region/region.component';
import { SalaryResultComponent } from './salary-result/salary-result.component';

@NgModule({
  declarations: [SalaryComponent, RegionComponent, SalaryResultComponent],
  imports: [
    CommonModule,
    FormsModule,
    SalaryRoutingModule,
    SharedModule,
    ScrollToModule
  ]
})
export class SalaryModule {}
