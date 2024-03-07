import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { YtInfoComponent } from './yt-info/yt-info.component';
import { YtMp3Component } from './yt-mp3/yt-mp3.component';
import { YtAllQualitiesComponent } from './yt-all-qualities/yt-all-qualities.component';
import { YtThumbnailComponent } from './yt-thumbnail/yt-thumbnail.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    YtInfoComponent,
    YtMp3Component,
    YtAllQualitiesComponent,
    YtThumbnailComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
