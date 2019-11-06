import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { TranslateComponent } from './translate/translate.component';
import { MaterialModule } from '../material.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouterModule } from '@angular/router';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { FusionChartsModule } from 'angular-fusioncharts';
import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive';

FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [NavComponent, TranslateComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FusionChartsModule,
    NgxCleaveDirectiveModule
  ],
  exports: [
    NavComponent,
    MaterialModule,
    TranslateModule,
    FusionChartsModule,
    NgxCleaveDirectiveModule
  ]
})
export class SharedModule {}
