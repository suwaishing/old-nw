import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SalaryRoutingModule } from "./salary-routing.module";
import { SalaryComponent } from "./salary.component";
import { SharedModule } from "../shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { NgxCleaveDirectiveModule } from "ngx-cleave-directive";
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";
import { FusionChartsModule } from "angular-fusioncharts";

// import * as FusionCharts from "fusioncharts";
// import * as Charts from "fusioncharts/fusioncharts.charts";
// import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@NgModule({
  declarations: [SalaryComponent],
  imports: [
    CommonModule,
    FormsModule,
    SalaryRoutingModule,
    SharedModule,
    // TranslateModule,
    // MaterialModule,
    // NgxCleaveDirectiveModule,
    ScrollToModule
    // FusionChartsModule
  ]
})
export class SalaryModule {}
