import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App1 } from './app1';

describe('App1', () => {
  let component: App1;
  let fixture: ComponentFixture<App1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(App1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
