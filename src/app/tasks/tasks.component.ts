import { Component, input, computed } from '@angular/core';
import { TaskComponent } from "./task/task.component";

import { dummyTasks } from "../dummy-tasks";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  userId = input<string>();
  name = input<string>();
  tasks = dummyTasks

  selectedUserTasks = computed(() => 
    this.tasks.filter((task) => task.userId === this.userId())
  )
}
