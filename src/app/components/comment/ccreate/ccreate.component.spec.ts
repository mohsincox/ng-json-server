import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcreateComponent } from './ccreate.component';

describe('CcreateComponent', () => {
  let component: CcreateComponent;
  let fixture: ComponentFixture<CcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
