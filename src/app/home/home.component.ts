import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  links$: Observable<ScullyRoute[]> = this.scully.available$;

  constructor(private scully: ScullyRoutesService) {}

  ngOnInit() {
    //debug the current pages
    this.links$.subscribe((links) => {
      console.log(links);
    });
  }
  headingTag = 'Tech Blog';
  headLine = 'Written by ';
  name = 'Zdravko Bozhkov';
  headLine2 = ' who lives and works in Atlanta, GA building useful things. ';
  twitterLink = 'https://twitter.com/zdravko6t5';
  twitter = 'You should follow them on Twitter';
  currentYear: number = new Date().getFullYear();
}
