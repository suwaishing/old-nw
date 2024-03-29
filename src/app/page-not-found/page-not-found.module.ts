import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PageNotFoundRoutingModule } from "./page-not-found-routing.module";
import { PageNotFoundComponent } from "./page-not-found.component";
import { NavComponent } from "../shared/nav/nav.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, PageNotFoundRoutingModule, SharedModule]
})
export class PageNotFoundModule {}
