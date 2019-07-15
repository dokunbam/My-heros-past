import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    selectedHero: Hero;

    onSelect(hero: Hero): void
    {
        this.selectedHero = hero;
    }

    heroes = HEROES;
  constructor() { }

  ngOnInit() {
  }

}
