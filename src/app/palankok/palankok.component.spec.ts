import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalankokComponent } from './palankok.component';

describe('PalankokComponent', () => {
  let component: PalankokComponent;
  let fixture: ComponentFixture<PalankokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PalankokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalankokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
