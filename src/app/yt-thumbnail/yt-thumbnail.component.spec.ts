import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtThumbnailComponent } from './yt-thumbnail.component';

describe('YtThumbnailComponent', () => {
  let component: YtThumbnailComponent;
  let fixture: ComponentFixture<YtThumbnailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YtThumbnailComponent]
    });
    fixture = TestBed.createComponent(YtThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
