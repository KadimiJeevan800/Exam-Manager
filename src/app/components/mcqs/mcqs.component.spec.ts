import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McqsComponent } from './mcqs.component';

describe('McqsComponent', () => {
  let component: McqsComponent;
  let fixture: ComponentFixture<McqsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McqsComponent]
    });
    fixture = TestBed.createComponent(McqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
