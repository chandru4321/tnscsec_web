import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rti } from './rti';

describe('Rti', () => {
  let component: Rti;
  let fixture: ComponentFixture<Rti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rti]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rti);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
