import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
/*
export class HeroesComponent implements OnInit {
  public heroes: Hero[];

  public selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor( private heroService: HeroService ) { }
  // любое имя переменной, обычно аналогично имени сервиса, но с маленькой буквы

  /*
  private getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  //.subscribe - подписка на обновление. Теперь тут асинхронная работа
  }

  ngOnInit() {
    this.getHeroes();
    //инициализация компонента
  }

}
*/

