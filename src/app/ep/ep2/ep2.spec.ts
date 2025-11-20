import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ep2 } from './ep2';

describe('Ep2', () => {
  let component: Ep2;
  let fixture: ComponentFixture<Ep2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ep2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ep2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
