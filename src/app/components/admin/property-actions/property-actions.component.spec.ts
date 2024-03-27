import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyActionsComponent } from './property-actions.component';

describe('PropertyActionsComponent', () => {
  let component: PropertyActionsComponent;
  let fixture: ComponentFixture<PropertyActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertyActionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertyActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
