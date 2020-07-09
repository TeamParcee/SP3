import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DrillLibrarySettingsPage } from './drill-library-settings.page';

describe('DrillLibrarySettingsPage', () => {
  let component: DrillLibrarySettingsPage;
  let fixture: ComponentFixture<DrillLibrarySettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillLibrarySettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DrillLibrarySettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
