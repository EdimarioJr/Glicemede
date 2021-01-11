import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component'
import { ConfirmPopoverComponent } from './components/confirm-popover/confirm-popover.component'
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, ConfirmPopoverComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [HeaderComponent,
    ConfirmPopoverComponent,
    CommonModule,
    IonicModule,
    FormsModule, ReactiveFormsModule]
})
export class SharedModule { }
