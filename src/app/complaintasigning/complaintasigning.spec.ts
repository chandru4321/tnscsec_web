import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Complaintasigning } from './complaintasigning';

describe('Complaintasigning', () => {
  let component: Complaintasigning;
  let fixture: ComponentFixture<Complaintasigning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Complaintasigning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Complaintasigning);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
