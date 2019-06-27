import { NgModule } from '@angular/core';
import { ThongtinTaikhoanComponent } from './thongtin-taikhoan/thongtin-taikhoan';
import { CaidatComponent } from './caidat/caidat';
import { HuongdanComponent } from './huongdan/huongdan';
import { ThongtinUngdungComponent } from './thongtin-ungdung/thongtin-ungdung';
import { ThemPhananhComponent } from './them-phananh/them-phananh';

@NgModule({
	declarations: [
    ThongtinTaikhoanComponent,
    CaidatComponent,
    HuongdanComponent,
    ThongtinUngdungComponent,
    ThemPhananhComponent],
	imports: [],
	exports: [
    ThongtinTaikhoanComponent,
    CaidatComponent,
    HuongdanComponent,
    ThongtinUngdungComponent,
    ThemPhananhComponent]
})
export class ComponentsModule {}
