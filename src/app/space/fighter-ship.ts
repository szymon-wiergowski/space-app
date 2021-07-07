import { SpaceShip } from './space-ship';
import { Pilot } from './pilot';

export class FighterShip extends SpaceShip {
  constructor(pilot?: Pilot) {
    super('Jedi Star Fighter', '/assets/jedi-star-fighter.png', pilot);
  }
}
