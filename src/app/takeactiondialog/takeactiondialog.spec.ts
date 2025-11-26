import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Takeactiondialog } from './takeactiondialog';

describe('Takeactiondialog', () => {
  let component: Takeactiondialog;
  let fixture: ComponentFixture<Takeactiondialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Takeactiondialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Takeactiondialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
