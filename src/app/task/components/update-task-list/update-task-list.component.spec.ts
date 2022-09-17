import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTaskListComponent } from './update-task-list.component';

describe('UpdateTaskListComponent', () => {
  let component: UpdateTaskListComponent;
  let fixture: ComponentFixture<UpdateTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTaskListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
