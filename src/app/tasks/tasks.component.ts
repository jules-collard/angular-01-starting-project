import { Component, input, computed, signal } from '@angular/core';
import { TaskComponent } from "./task/task.component";

import { Task } from "./task/task.model"

import { dummyTasks } from "../dummy-tasks";
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  userId = input.required<string>();
  name = input<string>();
  tasks = signal<Task[]>(dummyTasks)
  isAddingTask = signal<boolean>(false)

  selectedUserTasks = computed(() => 
    this.tasks().filter((task) => task.userId === this.userId())
  )

  onCompleteTask(id: string) {
    this.tasks.update(
      tasks => tasks.filter(task => task.id !== id)
    )
  }

  onStartAddTask() {
    this.isAddingTask.set(true)
  }

  onCancelAddTask() {
    this.isAddingTask.set(false)
  }
}

