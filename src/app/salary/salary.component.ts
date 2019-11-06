import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnChanges,
  Input
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import {
  ScrollToService,
  ScrollToConfigOptions
} from '@nicky-lenaers/ngx-scroll-to';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { AREAS } from './area';
declare var $: any;

const ldata = {
  chart: {
    plotToolText: 'Year $label: <br>' + '$displayValue',
    numberScaleValue: '1000,1000,1000,1000,1000',
    numberScaleUnit: 'K,M,B,T,Q',
    theme: 'fusion'
  },
  data: [
    {
      label: 'Venezuela',
      value: 10,
      displayValue: 'aaa'
    },
    {
      label: 'Saudi',
      value: 10,
      displayValue: 'aaa'
    }
  ]
};

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '*',
          opacity: 1
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0
        })
      ),
      transition('open => closed', [animate('0.2s')]),
      transition('closed => open', [animate('0.2s')])
    ])
  ]
})
export class SalaryComponent implements OnInit {
  constructor(
    private scrollToService: ScrollToService,
    public translate: TranslateService
  ) {
    this._Inflation = 3.54;
  }
  get Inflation(): number {
    return this._Inflation;
  }
  set Inflation(value: number) {
    this._Inflation = value;
    this.updateChartData();
    this.Netfor5Year();
  }
  cleaveOptions = {
    numeral: true,
    numeralPositiveOnly: true,
    numeralThousandsGroupStyle: 'thousand'
  };
  submited = false;
  luong: any;
  currencyType: any = 'VND';
  conversionRate: any = '23,200';
  luongBH: any;
  radioBaoHiem = 'lc';
  phuThuoc: number;
  inputPhuThuoc: any;
  thueBHXH = 8;
  thueBHYT = 1.5;
  thueBHTN = 1;
  giamTruBanThan: any = '9000000';
  giamTruNguoiPhuThuoc: any = '3,600,000';
  giamTruKhac: any;
  to5 = 5;
  from5to10 = 10;
  from10to18 = 15;
  from18to32 = 20;
  from32to52 = 25;
  from52to80 = 30;
  from80 = 35;

  InputLuongCoSo: any = '1,490,000';
  vungLuong = 1;
  LuonghocNghe = 7;
  InputLuongVung1: any = '4,180,000';
  InputLuongVung2: any = '3,710,000';
  InputLuongVung3: any = '3,250,000';
  InputLuongVung4: any = '2,920,000';

  showCurrencyType = false;
  showHuongDanVung = false;

  LuongNhap: number;
  LuongKetQua: number;
  LuongNet: number;
  GrossNetBoolean: boolean;

  TienBHXH: number;
  TienBHYT: number;
  TienBHTN = 0;
  TongBH: number;

  ThuNhapChiuThue: number;
  TienGiamTruBanThan: number;
  TienGiamTruNguoiPhuThuoc: number;
  TienGiamTruKhac: number;
  ThuNhapTinhThue: number;

  Tiento5 = 0;
  TienFrom5to10 = 0;
  TienFrom10to18 = 0;
  TienFrom18to32 = 0;
  TienFrom32to52 = 0;
  TienFrom52to80 = 0;
  TienFrom80 = 0;

  TongTNCN: number;

  AnnualSalary: number;
  Million: string;

  CompanyBHXH = 17;
  CompanyBHLD = 0.5;
  CompanyBHTN = 1;
  CompanyBHYT = 3;

  ValueCompanyBHXH: number;
  ValueCompanyBHLD: number;
  ValueCompanyBHTN: number;
  ValueCompanyBHYT: number;

  /* getCurrentExchangeRate(){
    let rateUrl = 'https://free.currencyconverterapi.com/api/v6/convert?q=USD_VND&compact=ultra&apiKey=d2fc37c867b1086aeefe';
    let testing = fetch(rateUrl)
      .then(response => response.json())
      .then(result => testing=result)
    this.conversionRate = testing.USD_VND;
  } */

  disabledUSD = true;

  // BAR

  lwidth = '100%';
  lheight = '100% ';
  ltype = 'column2d';
  dataFormat = 'json';
  dataSource = ldata;
  CurrentYear: number = new Date().getFullYear();
  currentLang: string;

  _Inflation: number;
  /*   calAns(){
    let from1to5 = Array(5).fill(0).map((e,i)=>(i+1))
    let SalaryFrom1to5 = from1to5.map(item=>Math.round(this.AnnualSalary*(Math.pow(1+(this.Inflation)/100,item-1))/10000)/100);
    return SalaryFrom1to5
  } */

  // Calculate monthly Net salary over 5 years with Inflation's adjustment
  Netfor5YearValuedata: number[];
  Netfor5YearValuelabel: string[];
  isRegionSearch = false;
  regionSearch() {
    this.isRegionSearch = !this.isRegionSearch;
  }
  getRegion(region: number) {
    this.vungLuong = region;
  }
  showCurrencyjq() {
    $('#showCurrencyjq').slideToggle(300);
  }

  stringtoFloat(value: any): number {
    value = value.toString().replace(/,/g, '');
    const result = parseFloat(value);
    return result;
  }

  tinhBaoHiem(TienDongBHValue) {
    this.InputLuongCoSo = this.stringtoFloat(this.InputLuongCoSo);
    const ToidaBHXH = (this.InputLuongCoSo * 20 * this.thueBHXH) / 100;
    const ToidaBHYT = (this.InputLuongCoSo * 20 * this.thueBHYT) / 100;
    let ToiDaBHTN;

    this.TienBHXH = (TienDongBHValue * this.thueBHXH) / 100;
    if (this.TienBHXH >= ToidaBHXH) {
      this.TienBHXH = ToidaBHXH;
    }
    this.TienBHYT = (TienDongBHValue * this.thueBHYT) / 100;
    if (this.TienBHYT >= ToidaBHYT) {
      this.TienBHYT = ToidaBHYT;
    }
    this.TienBHTN = (TienDongBHValue * this.thueBHTN) / 100;
    if (this.vungLuong == 1) {
      this.InputLuongVung1 = this.stringtoFloat(this.InputLuongVung1);
      ToiDaBHTN = (this.InputLuongVung1 * 20 * this.thueBHTN) / 100;
    }
    if (this.vungLuong == 2) {
      this.InputLuongVung2 = this.stringtoFloat(this.InputLuongVung2);
      ToiDaBHTN = (this.InputLuongVung2 * 20 * this.thueBHTN) / 100;
    }
    if (this.vungLuong == 3) {
      this.InputLuongVung3 = this.stringtoFloat(this.InputLuongVung3);
      ToiDaBHTN = (this.InputLuongVung3 * 20 * this.thueBHTN) / 100;
    }
    if (this.vungLuong == 4) {
      this.InputLuongVung4 = this.stringtoFloat(this.InputLuongVung4);
      ToiDaBHTN = (this.InputLuongVung4 * 20 * this.thueBHTN) / 100;
    }
    if (this.TienBHTN >= ToiDaBHTN) {
      this.TienBHTN = ToiDaBHTN;
    }
    this.TongBH = this.TienBHXH + this.TienBHYT + this.TienBHTN;
  }

  tinhBaoHiemNet(TienDongBHValue) {
    this.InputLuongCoSo = this.stringtoFloat(this.InputLuongCoSo);

    const ToidaBH = this.InputLuongCoSo * 20;
    let ToidaBHTN;
    if (this.vungLuong == 1) {
      this.InputLuongVung1 = this.stringtoFloat(this.InputLuongVung1);
      ToidaBHTN = this.InputLuongVung1 * 20;
    }
    if (this.vungLuong == 2) {
      this.InputLuongVung2 = this.stringtoFloat(this.InputLuongVung2);
      ToidaBHTN = this.InputLuongVung2 * 20;
    }
    if (this.vungLuong == 3) {
      this.InputLuongVung3 = this.stringtoFloat(this.InputLuongVung3);
      ToidaBHTN = this.InputLuongVung3 * 20;
    }
    if (this.vungLuong == 4) {
      this.InputLuongVung4 = this.stringtoFloat(this.InputLuongVung4);
      ToidaBHTN = this.InputLuongVung4 * 20;
    }

    // MAGIC STUFF
    let TempTienBHXH =
      TienDongBHValue /
      (1 - (this.thueBHXH + this.thueBHYT + this.thueBHTN) / 100);

    if (TempTienBHXH >= ToidaBH && TempTienBHXH < ToidaBHTN) {
      this.TienBHXH = (ToidaBH * this.thueBHXH) / 100;
      this.TienBHYT = (ToidaBH * this.thueBHYT) / 100;
      TempTienBHXH =
        (TienDongBHValue + this.TienBHXH + this.TienBHYT) /
        (1 - this.thueBHTN / 100);
      this.TienBHTN = TempTienBHXH * (this.thueBHTN / 100);
    } else if (TempTienBHXH >= ToidaBHTN) {
      this.TienBHXH = (ToidaBH * this.thueBHXH) / 100;
      this.TienBHYT = (ToidaBH * this.thueBHYT) / 100;
      this.TienBHTN = (ToidaBHTN * this.thueBHTN) / 100;
    } else {
      this.TienBHXH = TempTienBHXH * (this.thueBHXH / 100);
      this.TienBHYT = TempTienBHXH * (this.thueBHYT / 100);
      this.TienBHTN = TempTienBHXH * (this.thueBHTN / 100);
    }
    this.TongBH = this.TienBHXH + this.TienBHYT + this.TienBHTN;
  }

  tinhThueTNCN(TTCNValue) {
    // Tinh ThuNhapCaNhan
    this.Tiento5 = 0;
    this.TienFrom5to10 = 0;
    this.TienFrom10to18 = 0;
    this.TienFrom18to32 = 0;
    this.TienFrom32to52 = 0;
    this.TienFrom52to80 = 0;
    this.TienFrom80 = 0;

    if (TTCNValue <= 5000000 && TTCNValue > 1) {
      this.Tiento5 = (TTCNValue * this.to5) / 100;
    }
    if (TTCNValue <= 10000000 && TTCNValue > 5000000) {
      this.Tiento5 = 250000;
      this.TienFrom5to10 = ((TTCNValue - 5000000) * this.from5to10) / 100;
    }
    if (TTCNValue <= 18000000 && TTCNValue > 10000000) {
      this.Tiento5 = 250000;
      this.TienFrom5to10 = 500000;
      this.TienFrom10to18 = ((TTCNValue - 10000000) * this.from10to18) / 100;
    }
    if (TTCNValue <= 32000000 && TTCNValue > 18000000) {
      this.Tiento5 = 250000;
      this.TienFrom5to10 = 500000;
      this.TienFrom10to18 = 1200000;
      this.TienFrom18to32 = ((TTCNValue - 18000000) * this.from18to32) / 100;
    }
    if (TTCNValue <= 52000000 && TTCNValue > 32000000) {
      this.Tiento5 = 250000;
      this.TienFrom5to10 = 500000;
      this.TienFrom10to18 = 1200000;
      this.TienFrom18to32 = 2800000;
      this.TienFrom32to52 = ((TTCNValue - 32000000) * this.from32to52) / 100;
    }
    if (TTCNValue <= 80000000 && TTCNValue > 52000000) {
      this.Tiento5 = 250000;
      this.TienFrom5to10 = 500000;
      this.TienFrom10to18 = 1200000;
      this.TienFrom18to32 = 2800000;
      this.TienFrom32to52 = 5000000;
      this.TienFrom52to80 = ((TTCNValue - 52000000) * this.from52to80) / 100;
    }
    if (TTCNValue > 80000000) {
      this.Tiento5 = 250000;
      this.TienFrom5to10 = 500000;
      this.TienFrom10to18 = 1200000;
      this.TienFrom18to32 = 2800000;
      this.TienFrom32to52 = 5000000;
      this.TienFrom52to80 = 8400000;
      this.TienFrom80 = ((TTCNValue - 80000000) * this.from80) / 100;
    }
    this.TongTNCN =
      this.Tiento5 +
      this.TienFrom5to10 +
      this.TienFrom10to18 +
      this.TienFrom18to32 +
      this.TienFrom32to52 +
      this.TienFrom52to80 +
      this.TienFrom80;
  }
  commonSubmit(){
    this.submited = true;
    this.luong = this.stringtoFloat(this.luong);
    this.luongBH = this.stringtoFloat(this.luongBH);
    this.conversionRate = this.stringtoFloat(this.conversionRate);
    this.LuongNhap = this.luong;

  }
  grosstonet() {
    this.submited = true;
    this.luong = this.stringtoFloat(this.luong);
    this.luongBH = this.stringtoFloat(this.luongBH);
    this.conversionRate = this.stringtoFloat(this.conversionRate);
    this.LuongNhap = this.luong;
    let TienDongBH: number = this.luongBH;
    if (this.currencyType === 'USD') {
      this.LuongNhap *= this.conversionRate;
      TienDongBH *= this.conversionRate;
    }
    if (!TienDongBH) {
      TienDongBH = this.LuongNhap;
    }

    this.tinhBaoHiem(TienDongBH);

    // Tinh TNTT
    this.ThuNhapChiuThue = this.LuongNhap - this.TongBH;
    this.giamTruBanThan = this.stringtoFloat(this.giamTruBanThan);
    this.TienGiamTruBanThan = this.giamTruBanThan;
    this.giamTruNguoiPhuThuoc = this.stringtoFloat(this.giamTruNguoiPhuThuoc);
    this.phuThuoc = this.stringtoFloat(this.inputPhuThuoc);
    if (!this.phuThuoc) {
      this.phuThuoc = 0;
    }
    this.TienGiamTruNguoiPhuThuoc = this.phuThuoc * this.giamTruNguoiPhuThuoc;
    this.TienGiamTruKhac = this.stringtoFloat(this.giamTruKhac);
    if (!this.TienGiamTruKhac) {
      this.TienGiamTruKhac = 0;
    }
    this.ThuNhapTinhThue =
      this.ThuNhapChiuThue -
      this.giamTruBanThan -
      this.TienGiamTruNguoiPhuThuoc -
      this.TienGiamTruKhac;
    if (this.ThuNhapTinhThue < 0) {
      this.ThuNhapTinhThue = 0;
    }

    this.tinhThueTNCN(this.ThuNhapTinhThue);

    this.LuongKetQua = this.LuongNhap - this.TongBH - this.TongTNCN;
    this.LuongNet = this.LuongKetQua;
    this.GrossNetBoolean = true;
    this.thereismore();
  }

  nettogross() {
    this.submited = true;
    this.luong = this.stringtoFloat(this.luong);
    this.luongBH = this.stringtoFloat(this.luongBH);
    this.conversionRate = this.stringtoFloat(this.conversionRate);
    this.LuongNhap = this.luong;
    let TienDongBH: number = this.luongBH;
    if (this.currencyType === 'USD') {
      this.LuongNhap *= this.conversionRate;
      TienDongBH *= this.conversionRate;
    }
    // Tinh TNTT
    this.giamTruBanThan = this.stringtoFloat(this.giamTruBanThan);
    this.TienGiamTruBanThan = this.giamTruBanThan;
    this.giamTruNguoiPhuThuoc = this.stringtoFloat(this.giamTruNguoiPhuThuoc);
    this.phuThuoc = this.stringtoFloat(this.inputPhuThuoc);
    if (!this.phuThuoc) {
      this.phuThuoc = 0;
    }
    this.TienGiamTruNguoiPhuThuoc = this.phuThuoc * this.giamTruNguoiPhuThuoc;
    this.TienGiamTruKhac = this.stringtoFloat(this.giamTruKhac);
    if (!this.TienGiamTruKhac) {
      this.TienGiamTruKhac = 0;
    }
    let LuongQuyDoi: number;

    LuongQuyDoi =
      this.LuongNhap -
      this.giamTruBanThan -
      this.TienGiamTruNguoiPhuThuoc -
      this.TienGiamTruKhac;
    if (LuongQuyDoi < 0) {
      LuongQuyDoi = 0;
    }

    // Tinh Căn Cứ Quy Đổi
    if (LuongQuyDoi <= 4750000) {
      this.ThuNhapTinhThue = LuongQuyDoi / 0.95;
    }
    if (LuongQuyDoi > 4750000 && LuongQuyDoi <= 9250000) {
      this.ThuNhapTinhThue = (LuongQuyDoi - 250000) / 0.9;
    }
    if (LuongQuyDoi > 9250000 && LuongQuyDoi <= 16050000) {
      this.ThuNhapTinhThue = (LuongQuyDoi - 750000) / 0.85;
    }
    if (LuongQuyDoi > 16050000 && LuongQuyDoi <= 27250000) {
      this.ThuNhapTinhThue = (LuongQuyDoi - 1650000) / 0.8;
    }
    if (LuongQuyDoi > 27250000 && LuongQuyDoi <= 42250000) {
      this.ThuNhapTinhThue = (LuongQuyDoi - 3250000) / 0.75;
    }
    if (LuongQuyDoi > 42250000 && LuongQuyDoi <= 61850000) {
      this.ThuNhapTinhThue = (LuongQuyDoi - 5850000) / 0.7;
    }
    if (LuongQuyDoi > 61850000) {
      this.ThuNhapTinhThue = (LuongQuyDoi - 9850000) / 0.65;
    }

    this.tinhThueTNCN(this.ThuNhapTinhThue);
    this.ThuNhapChiuThue = this.LuongNhap + this.TongTNCN;
    this.ThuNhapTinhThue = LuongQuyDoi + this.TongTNCN;

    if (!TienDongBH) {
      TienDongBH = this.LuongNhap + this.TongTNCN;
      this.tinhBaoHiemNet(TienDongBH);
    } else {
      this.tinhBaoHiem(TienDongBH);
    }

    this.LuongKetQua = this.LuongNhap + this.TongBH + this.TongTNCN;
    this.LuongNet = this.LuongNhap;
    this.GrossNetBoolean = false;
    this.thereismore();
  }

  luongBhTooltip(): string {
    return `- Nếu công ty đóng BH ở mức thấp hơn tổng lương, thì nhập mức lương chính vào đây \n- Liên hệ bộ phận nhân sự để biết rõ mức lương đóng bảo hiểm \n- Để trống nếu không biết rõ`;
  }

  phuThuocTooltip(): string {
    return `- Nếu có nuôi con nhỏ, cha mẹ già, bạn có thể đăng ký "người phụ thuộc" để được giảm thuế \n- Quan Trọng: người phụ thuộc phải có đăng ký mã số thuế cá nhân, kể cả con nhỏ`;
  }

  toggleUSD() {
    this.disabledUSD = !this.disabledUSD;
  }

  ScrollToSideNav() {
    const config: ScrollToConfigOptions = {
      target: 'editThueid',
      duration: 600
    };
    this.scrollToService.scrollTo(config);
  }

  /***************************************************************************

    - Display y axis suffix in different languages
    - Custom tooltips text when hover chart

  ****************************************************************************/
  transNumScale() {
    let scale = {
      value: '1000,1000,1000,1000,1000',
      unit: 'K,M,B,T,Q',
      tooltips: 'Year $label: <br>' + '$displayValue'
    };
    switch (this.currentLang) {
      case 'vi':
        scale = {
          value: '1000,1000,1000,1000,1000',
          unit: ' Nghìn, Triệu, Tỷ, Ngìn Tỷ, Triệu Tỷ',
          tooltips: 'Năm $label: <br>' + '$displayValue'
        };
        break;
      case 'jp':
        scale = {
          value: '10000,100,100,10000,10000',
          unit: '万,百万,億,兆,京',
          tooltips: '$label 年: <br>' + '$displayValue'
        };
        break;
      case 'cn':
        scale = {
          value: '10000,100,100,10000,10000',
          unit: '万,百万,亿,兆,京',
          tooltips: '$label 年: <br>' + '$displayValue'
        };
        break;
      default:
        break;
    }
    return scale;
  }
  /***************************************************************************

    - Display custom value when hover chart

  ****************************************************************************/
  transformDisplay(number: number): any {
    let abs = number;
    const rounder = Math.pow(10, 2);
    let key = '';

    let powers = [
      { key: 'Q', value: Math.pow(10, 15) },
      { key: 'T', value: Math.pow(10, 12) },
      { key: 'B', value: Math.pow(10, 9) },
      { key: 'M', value: Math.pow(10, 6) },
      { key: 'k', value: 1000 }
    ];

    switch (this.currentLang) {
      case 'vi':
        powers = [
          { key: 'Triệu Tỷ', value: Math.pow(10, 15) },
          { key: 'Nghìn Tỷ', value: Math.pow(10, 12) },
          { key: 'Tỷ', value: Math.pow(10, 9) },
          { key: 'Triệu', value: Math.pow(10, 6) },
          { key: 'Nghìn', value: 1000 }
        ];
        break;
      case 'jp':
        powers = [
          { key: ' 京', value: Math.pow(10, 16) },
          { key: ' 兆', value: Math.pow(10, 12) },
          { key: ' 億', value: Math.pow(10, 8) },
          { key: ' 百万', value: Math.pow(10, 6) },
          { key: ' 万', value: 10000 }
        ];
        break;
      case 'cn':
        powers = [
          { key: ' 京', value: Math.pow(10, 16) },
          { key: ' 兆', value: Math.pow(10, 12) },
          { key: ' 亿', value: Math.pow(10, 8) },
          { key: ' 百万', value: Math.pow(10, 6) },
          { key: ' 万', value: 10000 }
        ];
        break;
    }

    for (let i = 0; i < powers.length; i++) {
      let reduced = abs / powers[i].value;
      reduced = Math.round(reduced * rounder) / rounder;
      if (reduced >= 1) {
        abs = reduced;
        key = powers[i].key;
        break;
      }
    }
    return abs + key;
  }

  updateChartData() {
    ldata.chart.numberScaleValue = this.transNumScale().value;
    ldata.chart.numberScaleUnit = this.transNumScale().unit;
    ldata.chart.plotToolText = this.transNumScale().tooltips;
    ldata.data = [
      {
        label: this.CurrentYear.toString(),
        value: Math.round(this.AnnualSalary),
        displayValue: this.transformDisplay(Math.round(this.AnnualSalary))
      },
      {
        label: (this.CurrentYear + 1).toString(),
        value: Math.round(
          this.AnnualSalary * Math.pow(1 + this.Inflation / 100, 1)
        ),
        displayValue: this.transformDisplay(
          Math.round(this.AnnualSalary * Math.pow(1 + this.Inflation / 100, 1))
        )
      },
      {
        label: (this.CurrentYear + 2).toString(),
        value: Math.round(
          this.AnnualSalary * Math.pow(1 + this.Inflation / 100, 2)
        ),
        displayValue: this.transformDisplay(
          Math.round(this.AnnualSalary * Math.pow(1 + this.Inflation / 100, 2))
        )
      },
      {
        label: (this.CurrentYear + 3).toString(),
        value: Math.round(
          this.AnnualSalary * Math.pow(1 + this.Inflation / 100, 3)
        ),
        displayValue: this.transformDisplay(
          Math.round(this.AnnualSalary * Math.pow(1 + this.Inflation / 100, 3))
        )
      },
      {
        label: (this.CurrentYear + 4).toString(),
        value: Math.round(
          this.AnnualSalary * Math.pow(1 + this.Inflation / 100, 4)
        ),
        displayValue: this.transformDisplay(
          Math.round(this.AnnualSalary * Math.pow(1 + this.Inflation / 100, 3))
        )
      }
    ];
  }
  ngOnInit() {
    this.currentLang = this.translate.currentLang;
    this.translate.onLangChange.subscribe(
      (langChangeEvent: LangChangeEvent) => {
        (this.currentLang = this.translate.currentLang), this.thereismore();
      }
    );
  }

  thereismore() {
    this.AnnualSalary = this.LuongNet * 12;
    // this.translate.get(['Million']).subscribe(text=>{this.Million=text.Million})
    this.updateChartData();
    this.Netfor5Year();
  }

  Netfor5Year() {
    (this.Netfor5YearValuedata = this.calAns02()),
      (this.Netfor5YearValuelabel = Array(5)
        .fill(0)
        .map((e, i) => (i + this.CurrentYear).toString()));
  }

  calAns02() {
    const from1to5 = Array(5)
      .fill(0)
      .map((e, i) => i + 1);
    const SalaryFrom1to5 = from1to5.map(
      item =>
        Math.round(
          this.AnnualSalary * Math.pow(1 + this.Inflation / 100, item - 1)
        ) / 12
    );
    return SalaryFrom1to5;
  }
}
