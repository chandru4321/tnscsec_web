import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C10 } from './c10';

describe('C10', () => {
  let component: C10;
  let fixture: ComponentFixture<C10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C10]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C10);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
