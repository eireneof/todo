import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { NewTaskComponent } from './new-task/new-task.component';
import { LocalStorageService } from '../../services/local-storage.service';
import { TodoComponent } from './todo.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskListComponent } from './task-list/task-list.component';



@NgModule({
  declarations: [
    TodoComponent,
    NewTaskComponent,
    HeaderComponent,
    DashboardComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [LocalStorageService],
  exports: [TodoComponent]
})
export class TodoModule { }
