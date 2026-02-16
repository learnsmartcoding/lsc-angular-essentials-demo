import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsDemo } from './inputs-demo';

describe('InputsDemo', () => {
  let component: InputsDemo;
  let fixture: ComponentFixture<InputsDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputsDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputsDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
