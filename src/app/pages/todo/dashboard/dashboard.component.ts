import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  tasksTypesSelected: string = 'all';

  changeTasksTypesSelected(typeSelected: string): void {
    this.tasksTypesSelected = typeSelected;
    // console.log(this.tasksTypesSelected);
  }

}
