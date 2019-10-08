import { Component, OnInit } from '@angular/core';
// import class
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() { //calls the getHeroes function on init
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void{ //stores in the heroes variable
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  
}
