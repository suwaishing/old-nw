import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NetWorthRoutingModule } from "./net-worth-routing.module";
import { NetWorthComponent } from "./net-worth.component";
import { ResultComponent } from "./result.component";
import { SharedModule } from "../shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { NgxCleaveDirectiveModule } from "ngx-cleave-directive";
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";
import { ShareButtonModule } from "@ngx-share/button";
import { FusionChartsModule } from "angular-fusioncharts";

// import * as FusionCharts from "fusioncharts";
// import * as Charts from "fusioncharts/fusioncharts.charts";
// import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@NgModule({
  declarations: [
    NetWorthComponent,
    ResultComponent
    // NavComponent,
    // TranslateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NetWorthRoutingModule,
    // TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    // MaterialModule,
    // NgxCleaveDirectiveModule,
    ScrollToModule,
    ShareButtonModule
    // FusionChartsModule
  ]
})
export class NetWorthModule {}
