import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcollectionComponent } from './viewcollection.component';

describe('ViewcollectionComponent', () => {
  let component: ViewcollectionComponent;
  let fixture: ComponentFixture<ViewcollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
