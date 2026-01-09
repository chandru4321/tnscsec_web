import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reportview } from './reportview';

describe('Reportview', () => {
  let component: Reportview;
  let fixture: ComponentFixture<Reportview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reportview]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Reportview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
