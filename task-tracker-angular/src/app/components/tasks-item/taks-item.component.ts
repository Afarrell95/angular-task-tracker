import { Component,Input } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-taks-item',
  templateUrl: './taks-item.component.html',
  styleUrls: ['./taks-item.component.css']
})
export class TaksItemComponent {
@Input() task!: Task;
}
