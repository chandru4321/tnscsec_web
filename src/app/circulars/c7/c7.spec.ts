import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C7 } from './c7';

describe('C7', () => {
  let component: C7;
  let fixture: ComponentFixture<C7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C7);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
