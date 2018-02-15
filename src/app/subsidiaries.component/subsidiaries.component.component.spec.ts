import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subsidiaries.ComponentComponent } from './subsidiaries.component.component';

describe('Subsidiaries.ComponentComponent', () => {
  let component: Subsidiaries.ComponentComponent;
  let fixture: ComponentFixture<Subsidiaries.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subsidiaries.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subsidiaries.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
