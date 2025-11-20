import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Complaintregister } from './complaintregister';

describe('Complaintregister', () => {
  let component: Complaintregister;
  let fixture: ComponentFixture<Complaintregister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Complaintregister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Complaintregister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
