import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service'

//The HeroService could get hero data from anywhere—a web service,
// local storage, or a mock datasource.
@Injectable({ //@Injectable() decorator accepts a metadata object for the service,
  providedIn: 'root' //root of the folder
})
export class HeroService {

  constructor(private messageService: MessageService) {
    // this is a typical 'service in a service'
   }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
