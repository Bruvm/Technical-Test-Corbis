import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strategy-maps',
  templateUrl: './strategy-maps.component.html',
  styleUrls: ['./strategy-maps.component.scss']
})
export class StrategyMapsComponent implements OnInit {
  disabled = true;
  active = 2;
  constructor() { }

  ngOnInit(): void {
  }

}
