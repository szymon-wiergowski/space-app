export class Pilot {
  public firstName = '';
  public lastName = '';
  public imageUrl = '';
  static defaultImageUrl = '/assets/unknown-pilot.png';

  constructor(fullName: string, imageUrl = Pilot.defaultImageUrl) {
    this.fullName = fullName;
    this.imageUrl = imageUrl;
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
