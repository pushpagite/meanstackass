import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutCompComponent } from './logout-comp.component';

describe('LogoutCompComponent', () => {
  let component: LogoutCompComponent;
  let fixture: ComponentFixture<LogoutCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
