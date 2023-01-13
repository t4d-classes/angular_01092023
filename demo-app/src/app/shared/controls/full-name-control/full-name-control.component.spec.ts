import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullNameControlComponent } from './full-name-control.component';

describe('FullNameControlComponent', () => {
  let component: FullNameControlComponent;
  let fixture: ComponentFixture<FullNameControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullNameControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullNameControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
