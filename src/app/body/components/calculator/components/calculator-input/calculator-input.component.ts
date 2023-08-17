import {Component} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {Select, Store} from "@ngxs/store";
import {AddOperation} from "@state/root.action";
import {Observable, take} from "rxjs";

export interface Tile {
  color: ThemePalette;
  cols: number;
  rows: number;
  operator: string;
}

@Component({
  selector: 'app-calculator-input',
  templateUrl: './calculator-input.component.html',
  styleUrls: ['./calculator-input.component.scss']
})
export class CalculatorInputComponent {
  constructor(private store: Store) {
  }

  @Select(state => state.root.screen) screen$: Observable<string>

  public tiles: Tile[] = [

    {operator: '(', cols: 1, rows: 4, color: 'primary'},
    {operator: '1', cols: 1, rows: 1, color: 'primary'},
    {operator: '2', cols: 1, rows: 1, color: 'primary'},
    {operator: '3', cols: 1, rows: 1, color: 'primary'},
    {operator: '/', cols: 1, rows: 1, color: 'accent'},
    {operator: 'AC', cols: 1, rows: 2, color: 'warn'},
    {operator: ')', cols: 1, rows: 4, color: 'primary'},

    {operator: '4', cols: 1, rows: 1, color: 'primary'},
    {operator: '5', cols: 1, rows: 1, color: 'primary'},
    {operator: '6', cols: 1, rows: 1, color: 'primary'},
    {operator: '*', cols: 1, rows: 1, color: 'accent'},

    {operator: '7', cols: 1, rows: 1, color: 'primary'},
    {operator: '8', cols: 1, rows: 1, color: 'primary'},
    {operator: '9', cols: 1, rows: 1, color: 'primary'},
    {operator: '-', cols: 1, rows: 1, color: 'accent'},
    {operator: '=', cols: 1, rows: 2, color: 'warn'},

    {operator: '.', cols: 1, rows: 1, color: 'accent'},
    {operator: '0', cols: 1, rows: 1, color: 'accent'},
    {operator: '%', cols: 1, rows: 1, color: 'accent'},
    {operator: '+', cols: 1, rows: 1, color: 'accent'},
  ];


  public addOperation(operation: string): void {
    this.screen$
      .pipe(take(1))
      .subscribe(operations =>
        this.store.dispatch(new AddOperation(operation, operations)))
  };
}
