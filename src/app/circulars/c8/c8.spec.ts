import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C8 } from './c8';

describe('C8', () => {
  let component: C8;
  let fixture: ComponentFixture<C8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C8);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
