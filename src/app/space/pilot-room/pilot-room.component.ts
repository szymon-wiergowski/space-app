import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css'],
})
export class PilotRoomComponent implements OnInit {
  @Output() selected = new EventEmitter<Pilot | null>();
  public pilots: Pilot[] = [];
  public selectedPilot: Pilot | null = null;
  constructor() {}

  ngOnInit(): void {
    this.pilots.push(new Pilot('Stormtrooper', '/assets/stormtrooper.png'));
    this.pilots.push(new Pilot('Yoda', '/assets/yoda.png'));
    this.pilots.push(new Pilot('Han Solo', '/assets/han.png'));
    this.pilots.push(new Pilot('Chewbacca', '/assets/chewbacca.png'));
  }

  public select(pilot: Pilot | null): void {
    this.selectedPilot = pilot;
    this.selected.emit(pilot);
  }

  public pilotReturn(pilot: Pilot) {
    this.pilots.push(pilot);
    console.log('pilots', this.pilots);
  }

  public pilotLeave(pilot: Pilot): void {
    const index = this.pilots.indexOf(pilot);
    this.pilots.splice(index, 1);
    this.select(null);
  }
}
