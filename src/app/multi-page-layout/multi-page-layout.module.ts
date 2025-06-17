import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiPageLayoutComponent } from './multi-page-layout.component';
import { MultiPageLayoutItemDirective } from './multi-page-layout-item.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MultiPageLayoutComponent, MultiPageLayoutItemDirective],
  exports: [MultiPageLayoutComponent, MultiPageLayoutItemDirective],
})
export class MultiPageLayoutModule { }