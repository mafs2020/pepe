import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor() {
    console.log(this.constructor.name);
  }

  ngOnInit(): void {
    console.log('inicio');
  }
}
