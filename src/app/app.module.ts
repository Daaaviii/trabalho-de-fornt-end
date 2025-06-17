import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MultiPageLayoutModule } from './multi-page-layout/multi-page-layout.module';

@NgModule({
  imports: [BrowserModule, FormsModule, MultiPageLayoutModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
