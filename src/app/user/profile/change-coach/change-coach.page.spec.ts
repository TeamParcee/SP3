import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChangeCoachPage } from './change-coach.page';

describe('ChangeCoachPage', () => {
  let component: ChangeCoachPage;
  let fixture: ComponentFixture<ChangeCoachPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeCoachPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeCoachPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
