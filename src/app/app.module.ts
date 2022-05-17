import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTaskComponent } from './pages/todo/new-task/new-task.component';
import { LocalStorageService } from './services/local-storage.service';
import { TodoComponent } from './pages/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
