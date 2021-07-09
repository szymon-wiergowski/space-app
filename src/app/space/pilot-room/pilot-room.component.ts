import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pilot } from '../pilot';
import { PilotService } from '../pilot.service';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css'],
})
export class PilotRoomComponent implements OnInit {
  @Output() selected = new EventEmitter<Pilot | null>();
  public pilots: Pilot[] = [];
  public selectedPilot: Pilot | null = null;
  constructor(private pilotService: PilotService) {}

  ngOnInit(): void {
    this.pilotService.getPilots().subscribe({
      next: pilots => (this.pilots = pilots),
      error: () => alert('Nie udało się pobrać pilotów'),
    });
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
