import { ComponentFixture, TestBed } from '@angular/core/testing';

import { About3 } from './about3';

describe('About3', () => {
  let component: About3;
  let fixture: ComponentFixture<About3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(About3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
