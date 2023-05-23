import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmoticonsPage } from './emoticons.page';

describe('EmoticonsPage', () => {
  let component: EmoticonsPage;
  let fixture: ComponentFixture<EmoticonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmoticonsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmoticonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
