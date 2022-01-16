import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllproyectosComponent } from './allproyectos.component';

describe('AllproyectosComponent', () => {
  let component: AllproyectosComponent;
  let fixture: ComponentFixture<AllproyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllproyectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
