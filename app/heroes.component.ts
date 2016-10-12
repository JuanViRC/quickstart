import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

//https://angular.io/docs/ts/latest/tutorial/toh-pt5.html

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    styleUrls: ['heroes.component.css'],
    templateUrl: 'heroes.component.html',
    providers: [HeroService]
})
export class HeroesComponent implements OnInit { 
    heroes: Hero[];
    selectedHero: Hero;    

    constructor(
        private router: Router,
        private heroService: HeroService
    ) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void{
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

}
