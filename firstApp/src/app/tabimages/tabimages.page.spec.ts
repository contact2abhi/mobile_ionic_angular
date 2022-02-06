import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImageGalaryPage } from './tabimages.page';

describe('ImageGalaryPage', () => {
  let component: ImageGalaryPage;
  let fixture: ComponentFixture<ImageGalaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageGalaryPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageGalaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
