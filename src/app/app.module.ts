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

//Directive
import { Autosize } from '../providers/directive/autosize';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
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
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environment/environment';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LanguageService } from '../providers/service/utils/language.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { SkeletonModule } from '../skeleton/skeleton.module';
import { QuanLyThuTucService } from '../providers/service/quanLyThuTuc';
//import { AuthService } from '../providers/service/utils/core/auth.service';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    MyApp,
    Autosize,
    ThemPhananhComponent,
    ThongtinTaikhoanComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SelectSearchableModule,
    NgxChartsModule,
    SkeletonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
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
    ThemPhananhComponent,
    ThongtinTaikhoanComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    FCM,
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
    QuanLyThuTucService,
    LanguageService,
    BarcodeScanner,
    // AuthService
  ]
})
export class AppModule { }
