import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CipokComponent } from './cipok.component';

describe('CipokComponent', () => {
  let component: CipokComponent;
  let fixture: ComponentFixture<CipokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CipokComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CipokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
