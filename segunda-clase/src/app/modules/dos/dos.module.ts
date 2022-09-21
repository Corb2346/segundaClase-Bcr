import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DosComponent } from './components/dos/dos.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DosComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports : [DosComponent],
})
export class DosModule { }
