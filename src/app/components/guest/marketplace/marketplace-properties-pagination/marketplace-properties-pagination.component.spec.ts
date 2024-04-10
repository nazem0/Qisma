import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplacePropertiesPaginationComponent } from './marketplace-properties-pagination.component';

describe('MarketplacePropertiesPaginationComponent', () => {
  let component: MarketplacePropertiesPaginationComponent;
  let fixture: ComponentFixture<MarketplacePropertiesPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarketplacePropertiesPaginationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarketplacePropertiesPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
