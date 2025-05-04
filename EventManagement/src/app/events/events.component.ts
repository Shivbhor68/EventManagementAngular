import { Component } from '@angular/core';
import { EventsService } from '../Services/events.service';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  constructor(private events: EventsService) {}
  allevents: any;
  ngOnInit() {
    this.events.getevents().subscribe((data: any) => {
      this.allevents = data;
      console.log(this.allevents);
    });
  }
}
