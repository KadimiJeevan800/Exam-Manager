import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareATestComponent } from './prepare-a-test.component';

describe('PrepareATestComponent', () => {
  let component: PrepareATestComponent;
  let fixture: ComponentFixture<PrepareATestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrepareATestComponent]
    });
    fixture = TestBed.createComponent(PrepareATestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
