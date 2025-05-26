import { Component, OnInit } from '@angular/core';
import { ETheme } from '../enums/ETheme.enum';

@Component({
  selector: 'poke-header',
  standalone: false,
  templateUrl: './poke-header.component.html',
  styleUrls: ['./poke-header.component.scss'],
})
export class PokeHeaderComponent implements OnInit {
  public icon: string = ETheme.ICON_MOON;
  public textTheme: string = ETheme.DARK_THEME;

  constructor() {}

  ngOnInit(): void {}

  public toggle() {
    const theme = document.documentElement.classList.toggle('dark-theme');

    if (theme) {
      this.textTheme = ETheme.LIGHT_THEME;
      this.icon = ETheme.ICON_SUN;
    } else {
      this.textTheme = ETheme.DARK_THEME;
      this.icon = ETheme.ICON_MOON;
    }
  }
}
