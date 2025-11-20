import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App5 } from './app5';

describe('App5', () => {
  let component: App5;
  let fixture: ComponentFixture<App5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(App5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
