import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnotesComponent } from './listnotes.component';

describe('ListnotesComponent', () => {
  let component: ListnotesComponent;
  let fixture: ComponentFixture<ListnotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListnotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
