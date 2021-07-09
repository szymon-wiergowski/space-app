import { PilotAttrs } from './pilot-attrs';

export class Pilot {
  public id?: number;
  public firstName = '';
  public lastName = '';
  public imageUrl = '';
  static defaultImageUrl = '/assets/unknown-pilot.png';

  constructor(attrs: PilotAttrs) {
    this.id = attrs.id;
    this.firstName = attrs.firstName;
    this.lastName = attrs.lastName;
    this.imageUrl = attrs.imageUrl || Pilot.defaultImageUrl;
  }

  public get fullName(): string {
    return this.lastName ? `${this.firstName} ${this.lastName}` : this.firstName;
  }

  public set fullName(value: string) {
    const values = value.split(' ');
    this.firstName = values[0];
    this.lastName = values[1];
  }
}
