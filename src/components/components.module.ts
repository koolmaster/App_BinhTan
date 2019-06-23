import { NgModule } from '@angular/core';
import { ThongtinTaikhoanComponent } from './thongtin-taikhoan/thongtin-taikhoan';
import { DoimatkhauComponent } from './doimatkhau/doimatkhau';
import { CaidatComponent } from './caidat/caidat';
import { HuongdanComponent } from './huongdan/huongdan';
import { ThongtinUngdungComponent } from './thongtin-ungdung/thongtin-ungdung';
import { ThemPhananhComponent } from './them-phananh/them-phananh';

@NgModule({
	declarations: [ThongtinTaikhoanComponent,
    DoimatkhauComponent,
    CaidatComponent,
    HuongdanComponent,
    ThongtinUngdungComponent,
    ThemPhananhComponent],
	imports: [],
	exports: [ThongtinTaikhoanComponent,
    DoimatkhauComponent,
    CaidatComponent,
    HuongdanComponent,
    ThongtinUngdungComponent,
    ThemPhananhComponent]
})
export class ComponentsModule {}
