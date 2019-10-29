import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NetWorthComponent } from "./net-worth.component";

const routes: Routes = [{ path: "", component: NetWorthComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetWorthRoutingModule {}
