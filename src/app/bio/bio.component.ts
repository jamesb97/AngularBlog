import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
})
export class BioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  headLine = 'Written by ';
  name = 'Zdravko Bozhkov';
  headLine2 = ' who lives and works in Atlanta, GA building useful things. ';
  twitterLink = 'https://twitter.com/zdravko6t5';
  twitter = 'You should follow them on Twitter';
}
