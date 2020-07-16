import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, ValidationErrors } from '@angular/forms';

export function minValidationMessage(err, field: FormlyFieldConfig) {
  return `Age must be greater than ${err.min}`;
}
export function ipValidationMessage(err, field: FormlyFieldConfig) {
  return `"${field.formControl.value}" is not the valid Ip address`;
}

export function IpValidator(control: FormControl): ValidationErrors {
  return !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value)
    ? null
    : { ip: true };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validators:[{
        name:'ip',
        validation:IpValidator
      }],
      validationMessages: [
        {
          name: 'required',
          message: 'This field is required',
        },
        {
          name: 'min',
          message: minValidationMessage,
        },
        {
          name: 'ip',
          message: ipValidationMessage,
        },
      ],
    }),
    FormlyMaterialModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
