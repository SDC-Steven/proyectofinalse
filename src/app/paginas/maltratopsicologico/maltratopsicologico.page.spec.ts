import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaltratopsicologicoPage } from './maltratopsicologico.page';

describe('MaltratopsicologicoPage', () => {
  let component: MaltratopsicologicoPage;
  let fixture: ComponentFixture<MaltratopsicologicoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaltratopsicologicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaltratopsicologicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
