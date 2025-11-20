import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App6 } from './app6';

describe('App6', () => {
  let component: App6;
  let fixture: ComponentFixture<App6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(App6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
