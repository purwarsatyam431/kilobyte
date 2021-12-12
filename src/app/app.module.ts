import { BrowserModule ,Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BlogpostModule} from './blogpost/blogpost.module';
import {CmspageModule} from './cmspage/cmspage.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import {MdbRippleModule } from 'mdb-angular-ui-kit/ripple'
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BlogpostModule,
    CmspageModule,
    AdminModule,
    AuthModule,
    AppRoutingModule,
    LoadingBarHttpClientModule,LoadingBarModule,LoadingBarRouterModule,
    MdbCheckboxModule,MdbRippleModule,MdbCarouselModule

  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
