import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { LegalEntityMaintenanceComponent } from './pages/legal-entity-maintenance/legal-entity-maintenance.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LeftMenusComponent } from './pages/left-menus/left-menus.component';
import { CurrentQuarterResultComponent } from './pages/current-quarter-result/current-quarter-result.component';
import { TreeMenuComponent } from './pages/left-menus/tree-menu/tree-menu.component';

import { StoreModule } from '@ngrx/store';
import { ArticleComponent } from './store/components/article.component';
import { reducers, metaReducers } from './store/reducers/reducers';

import {TableModule} from 'primeng/table';
import { CarService } from './service/carservice';


import {PaginatorModule} from 'primeng/paginator';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LegalEntityMaintenanceComponent,
    LandingPageComponent,
    LeftMenusComponent,
    CurrentQuarterResultComponent,
    TreeMenuComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    PaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },
    CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
