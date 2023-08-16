import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BodyComponent} from './body.component';
import {CalculatorComponent} from './components/calculator/calculator.component';
import {
  CalculatorScreenComponent
} from './components/calculator/components/calculator-screen/calculator-screen.component';
import {CalculatorInputComponent} from './components/calculator/components/calculator-input/calculator-input.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    BodyComponent,
    CalculatorComponent,
    CalculatorScreenComponent,
    CalculatorInputComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [BodyComponent]
})
export class BodyModule {
}
