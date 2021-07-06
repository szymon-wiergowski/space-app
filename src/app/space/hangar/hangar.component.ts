import { Component, OnInit } from '@angular/core';
import { SpaceShip } from '../space-ship';
import { FighterShip } from '../fighter-ship';
import { BomberShip } from '../bomber-ship';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css'],
})
export class HangarComponent implements OnInit {
  public spaceShips: SpaceShip[] = [];
  constructor() {}

  ngOnInit(): void {
    this.spaceShips.push(new FighterShip());
    this.spaceShips.push(new BomberShip());
  }
}
