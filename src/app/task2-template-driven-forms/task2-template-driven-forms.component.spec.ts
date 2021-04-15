import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2TemplateDrivenFormsComponent } from './task2-template-driven-forms.component';

describe('Task2TemplateDrivenFormsComponent', () => {
  let component: Task2TemplateDrivenFormsComponent;
  let fixture: ComponentFixture<Task2TemplateDrivenFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task2TemplateDrivenFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task2TemplateDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
