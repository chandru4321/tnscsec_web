import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C6 } from './c6';

describe('C6', () => {
  let component: C6;
  let fixture: ComponentFixture<C6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
