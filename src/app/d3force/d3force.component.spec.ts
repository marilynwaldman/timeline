import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3forceComponent } from './d3force.component';

describe('D3forceComponent', () => {
  let component: D3forceComponent;
  let fixture: ComponentFixture<D3forceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3forceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3forceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
