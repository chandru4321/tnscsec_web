import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ep1 } from './ep1';

describe('Ep1', () => {
  let component: Ep1;
  let fixture: ComponentFixture<Ep1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ep1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ep1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
