import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DrillLibraryFilterPage } from './drill-library-filter.page';

describe('DrillLibraryFilterPage', () => {
  let component: DrillLibraryFilterPage;
  let fixture: ComponentFixture<DrillLibraryFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillLibraryFilterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DrillLibraryFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
