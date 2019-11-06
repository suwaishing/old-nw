import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AREAS } from '../area';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
  constructor(public translate: TranslateService) {
    this.filteredAreas = this.Areas;
  }
  @ViewChild('areaKeyWord') nameField: ElementRef;
  Areas = AREAS;
  filteredAreas: any[];
  minArea = 0;
  maxArea = 5;
  numAreas = 5;
  // tslint:disable-next-line: variable-name
  private _filterKeyWord: string;
  @Output()
  regionChange = new EventEmitter<number>();

  get filterKeyWord(): string {
    return this._filterKeyWord;
  }
  set filterKeyWord(value: string) {
    this._filterKeyWord = value;
    this.filteredAreas = this.filterKeyWord
      ? this.filterAreas(this.filterKeyWord)
      : this.Areas;
    this.minArea = 0;
    this.maxArea = this.numAreas;
    if (this.maxArea > this.filteredAreas.length) {
      this.maxArea = this.filteredAreas.length;
    }
  }

  ngOnInit() {
    this.focusInstruction();
  }
  focusInstruction() {
    setTimeout(() => this.nameField.nativeElement.focus(), 600);
  }
  nextPage() {
    this.minArea += this.numAreas;
    this.maxArea += this.numAreas;
    if (this.maxArea > this.filteredAreas.length) {
      this.maxArea = this.filteredAreas.length;
    }
  }

  firstPage(): boolean {
    if (this.minArea < this.numAreas) {
      return false;
    } else {
      return true;
    }
  }
  lastPage() {
    if (this.maxArea < this.filteredAreas.length) {
      return true;
    } else {
      return false;
    }
  }

  previousPage() {
    this.minArea -= this.numAreas;
    if (this.maxArea === this.filteredAreas.length) {
      this.maxArea -= 3;
    } else {
      this.maxArea -= this.numAreas;
    }
  }

  numAreasChange() {
    this.minArea = 0;
    this.maxArea = this.numAreas;
  }
  filterAreas(filterBy: string): any[] {
    filterBy = this.change_alias(filterBy);

    return this.Areas.filter(
      vung => this.change_alias(vung.city).indexOf(filterBy) !== -1
    );
  }

  pickRegion(areaNo: number) {
    this.regionChange.emit(areaNo);
    $('#regionSearch').slideToggle(400);
  }

  change_alias(alias: string) {
    let str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      ' '
    );
    str = str.replace(/ + /g, ' ');
    str = str.trim();
    return str;
  }
}
