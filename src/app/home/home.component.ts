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
    /*this.links$.subscribe((links) => {
      console.log(links);
    });*/
  }
  headingTag = 'Tech Blog';
  headLine = 'Written by ';
  name = 'Zdravko Bozhkov';
  headshot =
    'https://firebasestorage.googleapis.com/v0/b/techblog-e0db2.appspot.com/o/clemsonheadshot.jpg?alt=media&token=6d6264f2-42f7-47e4-a365-6e8dbf0f3d5e';
  headLine2 = ' who lives and works in Atlanta, GA building useful things. ';
  twitterLink = 'https://twitter.com/zdravko6t5';
  twitter = 'You should follow them on Twitter';
  CreationsLink = 'https://www.zdravko6t5.website';
  Creations = 'Creations';
  DesignsLink = 'https://angulardesigns-aaa7c.web.app/';
  Designs = 'Designs';
  currentYear: number = new Date().getFullYear();
}
