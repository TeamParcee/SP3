import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideoLibraryPage } from './video-library.page';

describe('VideoLibraryPage', () => {
  let component: VideoLibraryPage;
  let fixture: ComponentFixture<VideoLibraryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoLibraryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideoLibraryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
