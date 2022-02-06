import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpensePage } from './tabexpense.page';

describe('ExpensePage', () => {
  let component: ExpensePage;
  let fixture: ComponentFixture<ExpensePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpensePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
