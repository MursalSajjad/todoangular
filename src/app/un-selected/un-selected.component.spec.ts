import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnSelectedComponent } from './un-selected.component';

describe('UnSelectedComponent', () => {
  let component: UnSelectedComponent;
  let fixture: ComponentFixture<UnSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
