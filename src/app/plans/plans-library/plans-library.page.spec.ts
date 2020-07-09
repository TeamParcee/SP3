import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlansLibraryPage } from './plans-library.page';

describe('PlansLibraryPage', () => {
  let component: PlansLibraryPage;
  let fixture: ComponentFixture<PlansLibraryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansLibraryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlansLibraryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
