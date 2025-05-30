import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  standalone: false,
  templateUrl: './poke-search.component.html',
  styleUrl: './poke-search.component.scss',
})
export class PokeSearchComponent {
  @Output() public emmitSearch: EventEmitter<string> =
    new EventEmitter<string>();

  ngOnInit(): void {}

  public search(value: string) {
    this.emmitSearch.emit(value);
  }
}
