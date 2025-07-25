import { Component, input, output, computed } from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Standard State Management:
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // @Output() select = new EventEmitter();

  // get imagePath() {
  //   return 'assets/users/' + this.avatar
  // }
  
  // With signals:
  user = input.required<User>();
  select = output<string>()
  
  imagePath = computed(() => {
    return 'assets/users/' + this.user().avatar
  })
  
  onSelectUser() {
    this.select.emit(this.user().id)
  }
}
