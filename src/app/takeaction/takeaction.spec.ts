import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TakeAction } from './takeaction'; // <-- IMPORTANT

describe('TakeAction', () => {
  let component: TakeAction;
  let fixture: ComponentFixture<TakeAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakeAction]  // Standalone component
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeAction); // <-- FIXED
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
