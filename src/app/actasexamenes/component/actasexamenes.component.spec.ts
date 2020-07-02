import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActasexamenesComponent } from './actasexamenes.component';

describe('ActasexamenesComponent', () => {
  let component: ActasexamenesComponent;
  let fixture: ComponentFixture<ActasexamenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActasexamenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActasexamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
