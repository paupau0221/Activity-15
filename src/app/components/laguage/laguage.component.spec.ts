import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaguageComponent } from './laguage.component';

describe('LaguageComponent', () => {
  let component: LaguageComponent;
  let fixture: ComponentFixture<LaguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaguageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
