import { ComponentFixture, TestBed } from '@angular/core/testing';

import { About5 } from './about5';

describe('About5', () => {
  let component: About5;
  let fixture: ComponentFixture<About5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(About5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
