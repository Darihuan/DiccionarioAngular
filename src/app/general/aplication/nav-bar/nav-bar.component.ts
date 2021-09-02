import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  private isdarkmode: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  public darkmode(): void {

    if (!this.isdarkmode) {
      document.body.classList.add("dark");
      this.isdarkmode = true;
    } else {
      document.body.classList.remove("dark");
      this.isdarkmode = false;
    }

  }
}
