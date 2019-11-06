import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  templateUrl: 'translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent {
  languages = [
    { id: 'en', value: 'English' },
    { id: 'vi', value: 'Tiếng Việt' },
    { id: 'jp', value: '日本語' },
    { id: 'cn', value: '简体中文' }
  ];
  selected;
  selectedText;
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'vi', 'jp', 'cn']);
    translate.setDefaultLang('en');
    this.selected = this.languages[0].id;
    this.selectedText = this.languages[0].value;
    // const browserLang = translate.getBrowserLang();
    translate.use(translate.getDefaultLang());
  }

  changeLang(value) {
    this.selectedText = this.search(value, this.languages);
    this.selected = value;
    this.translate.use(this.selected);
    // console.log(this.selected, this.selectedText);
  }
  search(key, arr) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === key) {
        return arr[i].value;
      }
    }
  }
}
