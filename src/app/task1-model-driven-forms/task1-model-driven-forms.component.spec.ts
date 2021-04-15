import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task1ModelDrivenFormsComponent } from './task1-model-driven-forms.component';

describe('Task1ModelDrivenFormsComponent', () => {
  let component: Task1ModelDrivenFormsComponent;
  let fixture: ComponentFixture<Task1ModelDrivenFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task1ModelDrivenFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Task1ModelDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
