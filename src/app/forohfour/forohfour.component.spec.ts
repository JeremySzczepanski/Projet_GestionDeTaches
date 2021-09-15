import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForohfourComponent } from './forohfour.component';

describe('ForohfourComponent', () => {
  let component: ForohfourComponent;
  let fixture: ComponentFixture<ForohfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForohfourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForohfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
