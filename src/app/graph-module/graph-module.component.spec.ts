import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphModuleComponent } from './graph-module.component';

describe('GraphModuleComponent', () => {
  let component: GraphModuleComponent;
  let fixture: ComponentFixture<GraphModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
