import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermekEditorComponent } from './termek-editor.component';

describe('TermekEditorComponent', () => {
  let component: TermekEditorComponent;
  let fixture: ComponentFixture<TermekEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TermekEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermekEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
