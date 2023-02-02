import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SummaryVisaCostComponentComponent } from './components/summary-visa-cost-component/summary-visa-cost-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryVisaCostComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
