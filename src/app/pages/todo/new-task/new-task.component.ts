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
    this.showTasks();
    this.newTaskForm = new FormGroup({
      taskId: new FormControl(),
      name: new FormControl(),
      isCompleted: new FormControl()
    });
  }

  generateTaskId(): string {
    return Guid.create().toString();
  }

  createTask(): Task {
    this.newTaskForm.value.taskId = this.generateTaskId();
    this.newTaskForm.value.isCompleted = false;
    return this.newTaskForm.value;
  }

  handleSetNewTaskAtForm(): void {
    const newTask: Task = this.createTask();
    this.tasks.push(newTask);
    this.localStorageService.set(this.tasks);
    this.newTaskForm.reset();
  }

  showTasks(): void {
    this.tasks = this.localStorageService.get();
  }

  denyTaskIsCompleted(index: number): boolean {
    return !this.tasks[index].isCompleted;
  }

  updateTaskIsCompleted(taskId: string): void {
    const index: number = this.tasks.findIndex(t => t.taskId === taskId);
    this.tasks[index].isCompleted = this.denyTaskIsCompleted(index);
    this.localStorageService.set(this.tasks);
  }
}
