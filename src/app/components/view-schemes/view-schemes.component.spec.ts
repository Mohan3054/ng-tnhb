import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSchemesComponent } from './view-schemes.component';

describe('ViewSchemesComponent', () => {
  let component: ViewSchemesComponent;
  let fixture: ComponentFixture<ViewSchemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewSchemesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewSchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
