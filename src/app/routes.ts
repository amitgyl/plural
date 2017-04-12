import { Routes } from '@angular/router';
// import { EventDetailsComponent } from './events/event-details/event-details/event-details.component';
// import { EventsListComponent } from './events/events-list/events-list.component';
// import { CreateEventComponent } from './events/create-event/create-event.component';
import { Errror404Component } from './errors/errror404/errror404.component'
// import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
// import { EventsListResolverService } from './events/events-list-resolver.service';
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivatorService,
  EventsListResolverService
} from './events/index'
export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    {path: 'events', component: EventsListComponent, resolve: {events:EventsListResolverService}},
    {path: 'event/:id', component: EventDetailsComponent, canActivate:[EventRouteActivatorService]},
    {path: '404', component: Errror404Component},
    {path: '', redirectTo:'events', pathMatch: 'full'},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]