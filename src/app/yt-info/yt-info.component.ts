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
        this.allThumbnails = this.ytType == 'thumbnails' && res;
        console.log('ytApiServiceytApiService',res)
        console.log('ytApiServiceytApiService',this.allThumbnails)
      }
    })
  }

  downloadImage(imageUrl: string): void {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'image.jpg';
    document.body.appendChild(link);
    link.click();
    window.open(imageUrl, '_blank');
    document.body.removeChild(link);
  }
}
