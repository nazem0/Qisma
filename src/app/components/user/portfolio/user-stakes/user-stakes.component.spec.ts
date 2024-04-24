/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserStakesComponent } from './user-stakes.component';

describe('UserStakesComponent', () => {
  let component: UserStakesComponent;
  let fixture: ComponentFixture<UserStakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
