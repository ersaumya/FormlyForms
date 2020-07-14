import { DataService } from './core/data.service';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

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
    countryid: 1,
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
      key: 'countryid',
      type: 'select',
      templateOptions: {
        label: 'Country',
        options: this.data.getCountry(),
      },
    },
  ];

  onSubmit({ valid, value }) {
    console.log(value);
  }
}
