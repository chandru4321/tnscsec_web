import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ep4 } from './ep4';

describe('Ep4', () => {
  let component: Ep4;
  let fixture: ComponentFixture<Ep4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ep4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ep4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
