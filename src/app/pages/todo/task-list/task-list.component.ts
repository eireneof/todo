import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

import { Task } from 'src/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  // @Input() isArrayTasksChanged: Task[] = [];

  @Input() selectedTasksType: string = 'all';

  tasks: Task[] = [];

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.showTasks();
  }

  showTasks(): void {
    this.tasks = this.localStorageService.get();
  }

  denyTaskIsCompleted(index: number): boolean {
    if(this.tasks[index].isCompleted == false) return true;
    return false;
  }

  findTaskIndex(taskId: string): number {
    return this.tasks.findIndex(t => t.taskId === taskId);
  }

  updateTaskIsCompleted(taskId: string): void {
    const index: number = this.findTaskIndex(taskId);
    this.tasks[index].isCompleted = this.denyTaskIsCompleted(index);
    this.localStorageService.set(this.tasks);
  }

  canShowThisTask(taskIscompletd: boolean): boolean {
    if(this.selectedTasksType  === 'all') return true;
    if(this.selectedTasksType  === 'active' && !taskIscompletd) return true;
    if(this.selectedTasksType  === 'completed' && taskIscompletd) return true;

    return false;
  }

  removeTaskById(taskId: string): void {
    const index: number = this.findTaskIndex(taskId);
    this.tasks.splice(index, 1);
    this.localStorageService.set(this.tasks);
  }

  deleteAllTasks() {
    this.tasks = [];
    this.localStorageService.clear();
  }

}
