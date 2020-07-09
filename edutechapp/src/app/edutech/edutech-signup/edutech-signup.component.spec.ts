import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdutechSignupComponent } from './edutech-signup.component';

describe('EdutechSignupComponent', () => {
  let component: EdutechSignupComponent;
  let fixture: ComponentFixture<EdutechSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdutechSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdutechSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
