import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdutechLoginComponent } from './edutech-login.component';

describe('EdutechLoginComponent', () => {
  let component: EdutechLoginComponent;
  let fixture: ComponentFixture<EdutechLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdutechLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdutechLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
