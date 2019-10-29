import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AppRoutingModule } from "./routes.module";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";
import { DeviceDetectorModule } from "ngx-device-detector";
import { Angulartics2Module } from "angulartics2";

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ScrollToModule.forRoot(),
    DeviceDetectorModule.forRoot(),
    Angulartics2Module.forRoot()
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
