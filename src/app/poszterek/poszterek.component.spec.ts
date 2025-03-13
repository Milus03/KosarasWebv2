import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoszterekComponent } from './poszterek.component';

describe('PoszterekComponent', () => {
  let component: PoszterekComponent;
  let fixture: ComponentFixture<PoszterekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoszterekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoszterekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
