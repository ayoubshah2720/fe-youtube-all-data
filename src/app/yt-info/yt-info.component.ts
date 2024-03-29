import { Component, Input, OnInit } from '@angular/core';
import { YtApiService } from '../_services/yt-api.service';

@Component({
  selector: 'app-yt-info',
  templateUrl: './yt-info.component.html',
  styleUrls: ['./yt-info.component.scss']
})
export class YtInfoComponent implements OnInit{

  @Input() ytType: string | undefined;
  public allThumbnails:any = [];
  allVideos: any = [];

  constructor(
    private ytApiService: YtApiService
  ) {}

  ngOnInit(): void {
    console.log('yttttttttttttttttttttttttttttpe',this.ytType)
    const typeOfContent = this.ytType == 'thumbnails' ? 'thumbnail' : this.ytType == 'videos' ? 'videos' : this.ytType == 'yt-mp3' ? 'audio' : 'download';
    // https://www.youtube.com/watch?v=uoFDy_187zQ
    const urle = 'https://www.youtube.com/watch?v=uoFDy_187zQ';
    this.ytApiService.getData(urle,typeOfContent).subscribe((res)=>{
      if(res) {
        this.allThumbnails = this.ytType == 'thumbnails' ? res : [];
        this.allVideos = this.ytType == 'videos' ? res : [];
        console.log('ytApiServiceytApiService',res)
        console.log('ytApiServiceytApiService',this.allThumbnails)
      }
    })
  }

  downloadData(url: string, type: string): void {
    if(type == 'thumbnails'){
      const link = document.createElement('a');
      link.href = url;
      link.download = 'image.jpg';
      document.body.appendChild(link);
      link.click();
      window.open(url, '_blank');
      document.body.removeChild(link);
    } else if(type == 'videos'){
      console.log('videosvideosvideosvideos',url)
    } else {
      
    }
  }
}
