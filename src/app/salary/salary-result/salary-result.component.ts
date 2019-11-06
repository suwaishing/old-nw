import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-salary-result',
  templateUrl: './salary-result.component.html',
  styleUrls: ['./salary-result.component.scss']
})
export class SalaryResultComponent implements OnInit {
  constructor(public translate: TranslateService) {}
  @Input() data;

  ngOnInit() {
    console.log(this.data);
  }
}
