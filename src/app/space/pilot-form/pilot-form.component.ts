import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { PilotService } from '../pilot.service';
import { PilotValidators } from '../pilot-validators';

@Component({
  selector: 'app-pilot-form',
  templateUrl: './pilot-form.component.html',
  styleUrls: ['./pilot-form.component.css'],
})
export class PilotFormComponent implements OnInit {
  public form!: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private pilotServices: PilotService) {}

  ngOnInit(): void {
    this.route.data.pipe(map(data => data.pilot)).subscribe(pilot => {
      this.form = new FormGroup({
        id: new FormControl(pilot.id),
        firstName: new FormControl(pilot.firstName, {
          validators: [Validators.required, PilotValidators.pilotName],
        }),
        lastName: new FormControl(pilot.lastName, {
          validators: [Validators.required],
          asyncValidators: [PilotValidators.pilotForbidden],
          updateOn: 'blur',
        }),
        imageUrl: new FormControl(pilot.imageUrl),
      });
    });
  }

  public save(): void {
    const pilotAttrs = this.form.value;
    this.pilotServices.savePilot(pilotAttrs).subscribe(
      () => this.router.navigate(['../..'], { relativeTo: this.route }),
      () => alert('Nie udało się zapisać pilota!')
    );
  }
}
