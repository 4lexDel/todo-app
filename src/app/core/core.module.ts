import { LOCALE_ID, NgModule } from '@angular/core';
import * as fr from '@angular/common/locales/fr';

import { CommonModule, HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent
  ],
  providers:[
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ]
})
export class CoreModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
}
