import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  card_title_1 = 'Grow Together';
  card_title_2 = 'Flowing Conversations';
  card_title_3 = 'Your Users';

  constructor() { }

  ngOnInit() {
  }

}
