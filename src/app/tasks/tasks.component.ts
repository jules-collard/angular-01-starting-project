import { Component, input, computed, signal } from '@angular/core';
import { TaskComponent } from "./task/task.component";

import { Task } from "./task/task.model"

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
  tasks = signal<Task[]>(dummyTasks)

  selectedUserTasks = computed(() => 
    this.tasks().filter((task) => task.userId === this.userId())
  )

  onCompleteTask(id: string) {
    this.tasks.update(
      tasks => tasks.filter(task => task.id !== id)
    )
  }
}

