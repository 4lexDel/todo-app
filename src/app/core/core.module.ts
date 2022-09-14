import { LOCALE_ID, NgModule } from '@angular/core';
import * as fr from '@angular/common/locales/fr';

import { CommonModule, HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  exports:[
    HeaderComponent
  ],
  providers:[
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi:true}
  ]
})
export class CoreModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
}
