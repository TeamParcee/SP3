import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanPeriodPage } from './plan-period.page';

describe('PlanPeriodPage', () => {
  let component: PlanPeriodPage;
  let fixture: ComponentFixture<PlanPeriodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanPeriodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanPeriodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
