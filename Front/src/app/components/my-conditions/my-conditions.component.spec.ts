import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyConditionsComponent } from './my-conditions.component';

describe('MyConditionsComponent', () => {
  let component: MyConditionsComponent;
  let fixture: ComponentFixture<MyConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyConditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
