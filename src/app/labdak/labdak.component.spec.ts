import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabdakComponent } from './labdak.component';

describe('LabdakComponent', () => {
  let component: LabdakComponent;
  let fixture: ComponentFixture<LabdakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LabdakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabdakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
