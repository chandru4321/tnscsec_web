import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ep6 } from './ep6';

describe('Ep6', () => {
  let component: Ep6;
  let fixture: ComponentFixture<Ep6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ep6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ep6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
