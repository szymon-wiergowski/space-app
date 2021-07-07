import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { SpaceRoutingModule } from './space-routing.module';
import { HangarComponent } from './hangar/hangar.component';
import { SpaceShipComponent } from './space-ship/space-ship.component';
import { PilotComponent } from './pilot/pilot.component';
import { PilotRoomComponent } from './pilot-room/pilot-room.component';
import { EngineersRoomComponent } from './engineers-room/engineers-room.component';

@NgModule({
  declarations: [HangarComponent, SpaceShipComponent, PilotComponent, PilotRoomComponent, EngineersRoomComponent],
  exports: [HangarComponent],
  imports: [CommonModule, SpaceRoutingModule, ReactiveFormsModule],
})
export class SpaceModule {}
