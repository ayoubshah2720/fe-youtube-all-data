import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import BASE_URL from '../Environment/'
@Injectable({
  providedIn: 'root'
})
export class YtApiService {

  baseURL = 'https://yt-download-iiyr.onrender.com/';
  constructor(private http: HttpClient) { }


  getData(vUrl:any, vType:any): Observable<any> {
    // thumbnail?url=https://www.youtube.com/watch?v=8x0Dty5D6CA
    // return this.http.get<any>(`https://yt-download-iiyr.onrender.com/thumbnail?url=https://www.youtube.com/watch?v=uoFDy_187zQ`);
    return this.http.get<any>(`https://yt-download-iiyr.onrender.com/${vType}?url=${vUrl}`);
  }
}
