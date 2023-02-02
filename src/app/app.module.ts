import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  VltSummaryVisaCostComponent
} from './components/summary-visa-cost/vlt-summary-visa-cost.component';
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatMenuModule} from "@angular/material/menu";
import {ɵEmptyOutletComponent} from "@angular/router";
import {MatSortModule} from "@angular/material/sort";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {createCustomElement} from "@angular/elements";
import { EditNumericFieldComponent } from './components/edit-numeric-field/edit-numeric-field.component';
import { FilterColumnComponent } from './components/filter-column/filter-column.component';

@NgModule({
  declarations: [
    AppComponent,
    VltSummaryVisaCostComponent,
    EditNumericFieldComponent,
    FilterColumnComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule,
    DragDropModule,
    MatCheckboxModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [VltSummaryVisaCostComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
  }
  ngDoBootstrap(appRef: ApplicationRef): void {
    const el = createCustomElement(VltSummaryVisaCostComponent, { injector: this.injector });
    customElements.define('vlt-summary-visa-cost-component', el);
  }
}
