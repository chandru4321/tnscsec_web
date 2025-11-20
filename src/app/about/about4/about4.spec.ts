import { ComponentFixture, TestBed } from '@angular/core/testing';

import { About4 } from './about4';

describe('About4', () => {
  let component: About4;
  let fixture: ComponentFixture<About4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(About4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
