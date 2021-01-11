import { NgModule } from '@angular/core';
import { PatientRoutingModule } from './patient-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SimpleMaskModule } from 'ngx-ion-simple-mask'


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PatientRoutingModule,
  ]
})
export class PatientModule { }
