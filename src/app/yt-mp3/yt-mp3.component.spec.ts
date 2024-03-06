import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtMp3Component } from './yt-mp3.component';

describe('YtMp3Component', () => {
  let component: YtMp3Component;
  let fixture: ComponentFixture<YtMp3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YtMp3Component]
    });
    fixture = TestBed.createComponent(YtMp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
