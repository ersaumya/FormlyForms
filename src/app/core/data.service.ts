import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getCountry() {
    return of([
      {
        value: null,
        label: ' -- ',
      },
      {
        value: 1,
        label: 'India',
      },
      {
        value: 2,
        label: 'USA',
      },
      {
        value: 3,
        label: 'Russia',
      },
    ]);
  }
}
