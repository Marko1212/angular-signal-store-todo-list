import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { TodosStore } from '../store/todos.store';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'todos-list',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonToggleModule,
    MatListModule,
  ],
  templateUrl: './todos-list.html',
  styleUrl: './todos-list.scss',
})
export class TodosList {
  store = inject(TodosStore)
}
