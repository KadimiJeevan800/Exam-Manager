import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TqsComponent } from './tqs.component';

describe('TqsComponent', () => {
  let component: TqsComponent;
  let fixture: ComponentFixture<TqsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TqsComponent]
    });
    fixture = TestBed.createComponent(TqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
