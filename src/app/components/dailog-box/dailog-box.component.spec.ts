import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailogBoxComponent } from './dailog-box.component';

describe('DailogBoxComponent', () => {
  let component: DailogBoxComponent;
  let fixture: ComponentFixture<DailogBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailogBoxComponent]
    });
    fixture = TestBed.createComponent(DailogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
