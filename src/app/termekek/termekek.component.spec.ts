import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermekekComponent } from './termekek.component';

describe('TermekekComponent', () => {
  let component: TermekekComponent;
  let fixture: ComponentFixture<TermekekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TermekekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermekekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
