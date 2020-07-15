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

  getState(countryId:number=null){
    return of([
      {
        value: null,
        label: ' -- ',
        countryId: null,
      },
      {
        value: 1,
        label: 'Odisha',
        countryId: 1,
      },
      {
        value: 2,
        label: 'Karnataka',
        countryId: 1,
      },
      {
        value: 3,
        label: 'California',
        countryId: 2,
      },
    ].filter(entry=>{
      if(countryId){
        return entry.countryId===countryId;
      }else{
        return true;
      }
    }));
  }
}
