import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
})
export class BioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  headshot =
    'https://firebasestorage.googleapis.com/v0/b/techblog-e0db2.appspot.com/o/clemsonheadshot.jpg?alt=media&token=6d6264f2-42f7-47e4-a365-6e8dbf0f3d5e';
  headLine = 'Written by ';
  name = 'Zdravko Bozhkov';
  headLine2 = ' who lives and works in Atlanta, GA building useful things. ';
  twitterLink = 'https://twitter.com/zdravko6t5';
  twitter = 'You should follow them on Twitter';
}
