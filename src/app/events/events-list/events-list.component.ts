import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../../common/toastr.service';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from '.././shared/index'


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

events : IEvent[]

  constructor(private eventService: EventService, private toastr: ToastrService, private route:ActivatedRoute) {
  }

  ngOnInit() {
    // this.eventService.getEvents().subscribe(events => {this.events = events}) 
    this.events = this.route.snapshot.data['events']
  }

  handleThumbnailClick(eventName){
   // this.toastr.success(eventName)
  }

}
