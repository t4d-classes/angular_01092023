import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { MyUppercasePipe } from './pipes/my-uppercase.pipe';
import { MyAppendPipe } from './pipes/my-append.pipe';
import { ArchivedPipe } from './pipes/archived.pipe';
import { FullNameControlComponent } from './controls/full-name-control/full-name-control.component';

@NgModule({
  declarations: [
    ToolHeaderComponent,
    MyUppercasePipe,
    MyAppendPipe,
    ArchivedPipe,
    FullNameControlComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    ToolHeaderComponent,
    MyUppercasePipe,
    MyAppendPipe,
    ArchivedPipe,
    FullNameControlComponent,
  ],
})
export class SharedModule {}
