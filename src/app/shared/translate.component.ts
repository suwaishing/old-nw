import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-translate",
  templateUrl: "translate.component.html",
  styleUrls: ["./translate.component.scss"]
})
export class TranslateComponent {
  languages = [
    { id: "en", value: "English" },
    { id: "vi", value: "Tiếng Việt" },
    { id: "jp", value: "日本語" },
    { id: "cn", value: "简体中文" }
  ];
  selected;
  selectedText;
  constructor(public translate: TranslateService) {
    translate.addLangs(["en", "vi", "jp", "cn"]);
    translate.setDefaultLang("en");
    this.selected = this.languages[0].id;
    this.selectedText = this.languages[0].value;
    // const browserLang = translate.getBrowserLang();
    translate.use(translate.getDefaultLang());
  }

  changeLang(_value) {
    this.selectedText = this.search(_value, this.languages);
    this.selected = _value;
    this.translate.use(this.selected);
    // console.log(this.selected, this.selectedText);
  }
  search(_key, _arr) {
    for (let i = 0; i < _arr.length; i++) {
      if (_arr[i].id === _key) {
        return _arr[i].value;
      }
    }
  }
}
