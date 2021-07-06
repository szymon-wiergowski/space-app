import { Pilot } from './pilot';

export class SpaceShip {
  public modelName: string;
  public imageUrl: string;
  public health = 100;
  public activeShields = true;
  public activeWeapons = false;
  public pilot?: Pilot;

  constructor(modelName: string, imageUrl: string, pilot?: Pilot) {
    this.modelName = modelName;
    this.imageUrl = imageUrl;
    this.pilot = pilot;
  }
}
