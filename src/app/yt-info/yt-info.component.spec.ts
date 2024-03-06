import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtInfoComponent } from './yt-info.component';

describe('YtInfoComponent', () => {
  let component: YtInfoComponent;
  let fixture: ComponentFixture<YtInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YtInfoComponent]
    });
    fixture = TestBed.createComponent(YtInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
