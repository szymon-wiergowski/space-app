import { Component, OnInit, ViewChild } from '@angular/core';
import { SpaceShip } from '../space-ship';
import { Pilot } from '../pilot';
import { PilotRoomComponent } from '../pilot-room/pilot-room.component';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css'],
})
export class HangarComponent implements OnInit {
  @ViewChild(PilotRoomComponent) pilotRoom!: PilotRoomComponent;

  public spaceShips: SpaceShip[] = [];
  public selectedPilot: Pilot | null = null;

  constructor() {}

  ngOnInit(): void {}

  public setSelectedPilot(pilot: Pilot | null) {
    this.selectedPilot = pilot;
  }

  public assignPilot(spaceShip: SpaceShip): void {
    if (!this.selectedPilot) {
      return;
    }
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.pilotLeave(this.selectedPilot);
  }

  public designPilot(spaceShip: SpaceShip) {
    if (!spaceShip.pilot) {
      return;
    }
    this.pilotRoom.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = undefined;
    console.log('spaceShips', this.spaceShips);
  }
}
