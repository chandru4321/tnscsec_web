import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App4 } from './app4';

describe('App4', () => {
  let component: App4;
  let fixture: ComponentFixture<App4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(App4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
