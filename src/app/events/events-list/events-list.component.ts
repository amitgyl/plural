import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../../common/toastr.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

events : any[]
  // event1 = {
  //   id: 1,
  //   name: 'Angular Connect',
  //   date: '9/26/2036',
  //   time: '10:00 am',
  //   price: 599.99,
  //   imageUrl: '/app/assets/images/angularconnect-shield.png',
  //   location: {
  //     address: '1057 DT',
  //     city: 'London',
  //     country: 'England'
  //   }
  // }
  // handleEventClicked(data){
  //   console.log(data);  
  // }

  constructor(private eventService: EventService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.events = this.eventService.getEvents() 
  }

  handleThumbnailClick(eventName){
   // this.toastr.success(eventName)
  }

}
