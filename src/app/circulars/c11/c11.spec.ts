import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C11 } from './c11';

describe('C11', () => {
  let component: C11;
  let fixture: ComponentFixture<C11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C11]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C11);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
