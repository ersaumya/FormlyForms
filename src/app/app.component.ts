import { DataService } from './core/data.service';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { switchMap, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FormlyForms';
  constructor(private data: DataService) {}
  form = new FormGroup({});
  model = {
    firstname: 'Soumya',
    lastname: 'Rout',
    age: 28,
    countryId: 1,
    stateId: 1,
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'firstname',
      type: 'input',
      templateOptions: {
        label: 'First Name',
      },
    },
    {
      key: 'lastname',
      type: 'input',
      templateOptions: {
        label: 'Last Name',
      },
    },
    {
      key: 'age',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Age',
      },
    },
    {
      key: 'countryId',
      type: 'select',
      templateOptions: {
        label: 'Country',
        options: this.data.getCountry(),
      },
    },
    {
      key: 'stateId',
      type: 'select',
      templateOptions: {
        label: 'State',
        options: []
      },
      expressionProperties:{
        'templateOptions.disabled':model=>!model.countryId,
        'model.stateId':'!model.countryId ? null : model.stateId'
      },
      hooks: {
        onInit: (field: FormlyFieldConfig) => {
          field.templateOptions.options = field.form
            .get('countryId')
            .valueChanges.pipe(
              startWith(this.model.countryId),
              switchMap((countryid) => this.data.getState(countryid))
            );
        },
      },
    },
  ];

  onSubmit({ valid, value }) {
    console.log(value);
  }
}
