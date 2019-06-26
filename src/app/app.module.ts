import { QuyhoachPage } from './../pages/quyhoach/quyhoach';
import { CanhanPage } from './../pages/canhan/canhan';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SelectSearchableModule } from 'ionic-select-searchable';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { FCM } from '@ionic-native/fcm';
import { HttpModule } from '@angular/http';
import { HTTP } from '@ionic-native/http';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { AnninhTrattuPage } from '../pages/anninh-trattu/anninh-trattu';
import { ChitietTintucPage } from '../pages/home/chitiet-tintuc/chitiet-tintuc';
import { ChitietAnninhtrattuPage } from '../pages/anninh-trattu/chitiet-anninhtrattu/chitiet-anninhtrattu';
import { ThongbaoPage } from '../pages/thongbao/thongbao';
import { ChitietThongbaoPage } from '../pages/thongbao/chitiet-thongbao/chitiet-thongbao';
import { TrungCauPage } from '../pages/trung-cau/trung-cau';
import { ChitietTrungcauPage } from '../pages/trung-cau/chitiet-trungcau/chitiet-trungcau';
import { PhanAnhPage } from '../pages/phan-anh/phan-anh';
import { ChitietPhananhPage } from '../pages/phan-anh/chitiet-phananh/chitiet-phananh';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

//Directive
import { Autosize } from '../providers/directive/autosize';
//Components
import { ThemPhananhComponent } from '../components/them-phananh/them-phananh';
import { ThongtinTaikhoanComponent } from '../components/thongtin-taikhoan/thongtin-taikhoan';
//Service
import { ApiProvider } from '../providers/const/api';
import { TrungCauService } from '../providers/service/trungCauService';
import { AlertService } from '../providers/service/alertService';
import { ThongBaoService } from '../providers/service/thongBaoService';
import { PhanAnhService } from '../providers/service/phanAnhService';
import { TinTucService } from '../providers/service/tinTucService';
import { AnNinhTratTuService } from '../providers/service/anNinhTratTuService';
import { LoginService } from '../providers/service/loginService';

// GiapNT4
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';

import { AuthService } from '../pages/core/auth.service';
import { UserService } from '../pages/core/user.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environment/environment';
import { KhacPage } from '../pages/khac/khac';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TrattudothiPage } from '../pages/trattudothi/trattudothi';
import { HuongdansudungPage } from '../pages/huongdansudung/huongdansudung';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ChitietTintucPage,
    AnninhTrattuPage,
    ChitietAnninhtrattuPage,
    ThongbaoPage,
    QuyhoachPage,
    TrattudothiPage,
    ChitietThongbaoPage,
    TrungCauPage,
    ChitietTrungcauPage,
    PhanAnhPage,
    HuongdansudungPage,
    ChitietPhananhPage,
    CanhanPage,
    KhacPage,

    Autosize,

    ThemPhananhComponent,
    ThongtinTaikhoanComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    SelectSearchableModule,
    NgxChartsModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      tabsPlacement: 'bottom',
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ChitietTintucPage,
    AnninhTrattuPage,
    TrattudothiPage,
    ChitietAnninhtrattuPage,
    ThongbaoPage,
    QuyhoachPage,
    ChitietThongbaoPage,
    TrungCauPage,
    HuongdansudungPage,
    ChitietTrungcauPage,
    PhanAnhPage,
    ChitietPhananhPage,
    KhacPage,
    CanhanPage,

    ThemPhananhComponent,
    ThongtinTaikhoanComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    FCM,
    NativePageTransitions,
    LocalNotifications,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiProvider,
    AlertService,
    TrungCauService,
    ThongBaoService,
    PhanAnhService,
    TinTucService,
    LoginService,
    InAppBrowser,
    AnNinhTratTuService,
    Facebook,
    GooglePlus,
    AuthService
  ]
})
export class AppModule { }
