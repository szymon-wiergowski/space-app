import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';

export class PilotValidators {
  static pilotName(formControl: AbstractControl): ValidationErrors | null {
    return !formControl.value || /^[A-Z]/.test(formControl.value) ? null : { pilotName: true };
  }

  static pilotForbidden(formControl: AbstractControl): Observable<ValidationErrors | null> {
    if (!formControl.value) {
      return of(null);
    }
    const url = `${environment.apiUrl}/forbidden-names?name=${formControl.value}`;
    return ajax
      .getJSON<Array<{ name: string }>>(url)
      .pipe(map(pilots => (pilots.length > 0 ? { pilotForbidden: true } : null)));
  }
}
