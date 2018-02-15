import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePortfolioComponent } from './service-portfolio.component';

describe('ServicePortfolioComponent', () => {
  let component: ServicePortfolioComponent;
  let fixture: ComponentFixture<ServicePortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
