import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App3 } from './app3';

describe('App3', () => {
  let component: App3;
  let fixture: ComponentFixture<App3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(App3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
