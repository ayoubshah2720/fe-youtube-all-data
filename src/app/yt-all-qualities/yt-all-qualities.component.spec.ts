import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtAllQualitiesComponent } from './yt-all-qualities.component';

describe('YtAllQualitiesComponent', () => {
  let component: YtAllQualitiesComponent;
  let fixture: ComponentFixture<YtAllQualitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YtAllQualitiesComponent]
    });
    fixture = TestBed.createComponent(YtAllQualitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
