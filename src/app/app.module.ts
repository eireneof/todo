import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTaskComponent } from './pages/todo/new-task/new-task.component';
import { LocalStorageService } from './services/local-storage.service';
import { TodoComponent } from './pages/todo/todo.component';
import { HeaderComponent } from './pages/todo/header/header.component';
import { DashboardComponent } from './pages/todo/dashboard/dashboard.component';
import { TaskListComponent } from './pages/todo/task-list/task-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    TodoComponent,
    HeaderComponent,
    DashboardComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
