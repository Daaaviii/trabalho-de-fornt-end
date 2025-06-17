import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activePage = 1;
  visiblePages = 2;
  totalPages = 3;

  changeActivePage(page: number): void {
    this.activePage = page;
  }

  changePagesCount(pages: number): void {
    this.visiblePages = pages;
  }
}
