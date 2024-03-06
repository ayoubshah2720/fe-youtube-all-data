import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-yt-info',
  templateUrl: './yt-info.component.html',
  styleUrls: ['./yt-info.component.scss']
})
export class YtInfoComponent implements OnInit{

  @Input() ytType: string | undefined;

  ngOnInit(): void {
    console.log('yttttttttttttttttttttttttttttpe',this.ytType)
  }
}
