import { Routes } from '@angular/router';
import { EventDetailsComponent } from './events/event-details/event-details/event-details.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Errror404Component } from './errors/errror404/errror404.component'
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';

export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent},
    {path: 'events', component: EventsListComponent},
    {path: 'event/:id', component: EventDetailsComponent, canActivate:[EventRouteActivatorService]},
    {path: '404', component: Errror404Component},
    {path: '', redirectTo:'events', pathMatch: 'full'}
]