import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnupComponent } from './btnup.component';

describe('BtnupComponent', () => {
  let component: BtnupComponent;
  let fixture: ComponentFixture<BtnupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BtnupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
