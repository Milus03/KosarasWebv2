import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MezekComponent } from './mezek.component';

describe('MezekComponent', () => {
  let component: MezekComponent;
  let fixture: ComponentFixture<MezekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MezekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MezekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
