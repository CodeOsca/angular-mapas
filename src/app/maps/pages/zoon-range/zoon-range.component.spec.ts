import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoonRangeComponent } from './zoon-range.component';

describe('ZoonRangeComponent', () => {
  let component: ZoonRangeComponent;
  let fixture: ComponentFixture<ZoonRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoonRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoonRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
