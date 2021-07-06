import { Component, OnInit } from '@angular/core';
import { SpaceShip } from '../space-ship';
import { FighterShip } from '../fighter-ship';
import { BomberShip } from '../bomber-ship';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css'],
})
export class HangarComponent implements OnInit {
  public spaceShips: SpaceShip[] = [];
  constructor() {}

  ngOnInit(): void {
    this.spaceShips.push(new FighterShip(new Pilot('Han Solo', '/assets/unknown-pilot.png')));
    this.spaceShips.push(new BomberShip(new Pilot('Chewbacca', '/assets/chewbacca.png')));
  }
}
