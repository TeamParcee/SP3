import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DrillLibraryPage } from './drill-library.page';

describe('DrillLibraryPage', () => {
  let component: DrillLibraryPage;
  let fixture: ComponentFixture<DrillLibraryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillLibraryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DrillLibraryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
