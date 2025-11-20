import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C9 } from './c9';

describe('C9', () => {
  let component: C9;
  let fixture: ComponentFixture<C9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C9]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C9);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
