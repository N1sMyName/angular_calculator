import {Component, OnInit} from '@angular/core';
import {Select} from "@ngxs/store";
import {Observable, take} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-calculator-screen',
  templateUrl: './calculator-screen.component.html',
  styleUrls: ['./calculator-screen.component.scss']
})
export class CalculatorScreenComponent implements OnInit {
  @Select(state => state.root.screen) screen$: Observable<string>;
  public control: FormControl<string | null> = new FormControl<string | null>('')

  ngOnInit() {
    this.screen$.subscribe(screen => {
      this.control.setValue(screen)
    })
  }

}
