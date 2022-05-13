import { Component, OnInit } from '@angular/core';
import { Task } from 'src/Task';
import { FormControl, FormGroup } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  tasks: Task[] = [];
  newTaskForm: any;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.tasks = [];
    this.newTaskForm = new FormGroup({
      taskId: new FormControl(),
      name: new FormControl(),
      isCompleted: new FormControl()
    });
  }

  setNewTask(): void {
    this.newTaskForm.value.taskId = Guid.create().toString();
    this.newTaskForm.value.isCompleted = false;
    const newTask: Task = this.newTaskForm.value;
    this.tasks.push(newTask);
    this.localStorageService.set('BD', this.tasks);
    this.newTaskForm.reset();

  }

}
