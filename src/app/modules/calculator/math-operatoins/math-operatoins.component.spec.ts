import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathOperatoinsComponent } from './math-operatoins.component';

describe('MathOperatoinsComponent', () => {
  let component: MathOperatoinsComponent;
  let fixture: ComponentFixture<MathOperatoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathOperatoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathOperatoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
