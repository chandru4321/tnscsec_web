import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionManuals } from './electionmanuals';

describe('ElectionManuals', () => {
  let component: ElectionManuals;
  let fixture: ComponentFixture<ElectionManuals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectionManuals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectionManuals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
