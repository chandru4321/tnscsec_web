import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App2 } from './app2';

describe('App2', () => {
  let component: App2;
  let fixture: ComponentFixture<App2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(App2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
