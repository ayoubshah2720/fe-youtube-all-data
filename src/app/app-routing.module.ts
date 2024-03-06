import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YtInfoComponent } from './yt-info/yt-info.component';
import { YtMp3Component } from './yt-mp3/yt-mp3.component';
import { YtAllQualitiesComponent } from './yt-all-qualities/yt-all-qualities.component';
import { YtThumbnailComponent } from './yt-thumbnail/yt-thumbnail.component';

const routes: Routes = [
  {
    path:'',
    component: YtInfoComponent
  },
  {
    path:'thumbnails',
    component: YtThumbnailComponent
  },
  {
    path:'videos',
    component: YtAllQualitiesComponent
  },
  {
    path:'yt-mp3',
    component: YtMp3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
