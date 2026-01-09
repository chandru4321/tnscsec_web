import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Electiondata } from './electiondata';

describe('Electiondata', () => {
  let component: Electiondata;
  let fixture: ComponentFixture<Electiondata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Electiondata]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Electiondata);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
