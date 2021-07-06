import { SpaceShip } from './space-ship';
import { Pilot } from './pilot';

export class BomberShip extends SpaceShip {
  constructor(pilot?: Pilot) {
    super('MG-100 StarFortress', '/assets/StarFortress.png', pilot);
  }
}
