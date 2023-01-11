import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { MyUppercasePipe } from './pipes/my-uppercase.pipe';
import { MyAppendPipe } from './pipes/my-append.pipe';

@NgModule({
  declarations: [ToolHeaderComponent, MyUppercasePipe, MyAppendPipe],
  imports: [CommonModule],
  exports: [ToolHeaderComponent, MyUppercasePipe, MyAppendPipe],
})
export class SharedModule {}
