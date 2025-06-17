import { coerceNumberProperty } from '@angular/cdk/coercion';
import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  QueryList,
  Renderer2,
  SimpleChanges,
  ViewChildren
} from '@angular/core';
import { MultiPageLayoutItemDirective } from './multi-page-layout-item.directive';

@Component({
  selector: 'app-multi-page-layout',
  template: `
    <div class="app-multi-page-layout-items">
      <ng-container *ngFor="let page of pages.toArray(); let isLast = last">
        <ng-template #d [ngTemplateOutlet]="page.template"></ng-template>
        <div
          class="divider"
          [style.width.px]="dividerWidthPxNumber"
          *ngIf="!isLast && visiblePagesNumber > 1"
        ></div>
      </ng-container>
    </div>
  `,
  styleUrls: ['./multi-page-layout.component.scss']
})
export class MultiPageLayoutComponent
  implements OnChanges, AfterContentChecked {
  @Input() activePage: number | string | undefined = 1;
  @Input() dividerWidthPx: number | string | undefined = 1;
  @HostBinding('class.app-multi-page-layout') klass = true;
  @ContentChildren(MultiPageLayoutItemDirective) pages: QueryList<
    MultiPageLayoutItemDirective
  >;
  @Input() visiblePages: number | string | undefined = 1;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  get activePageNumber(): number {
    return coerceNumberProperty(this.activePage);
  }

  get dividerWidthPxNumber(): number {
    return coerceNumberProperty(this.dividerWidthPx);
  }

  get visiblePagesNumber(): number {
    return coerceNumberProperty(this.visiblePages);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.updateWidths();
    }
  }

  ngAfterContentChecked(): void {
    this.updateWidths();
  }

  private updateWidths(): void {
    if (this.pages) {
      const apn = this.visiblePagesNumber < 1 ? 1 : this.visiblePagesNumber;
      const threshold = this.pages.length - this.visiblePagesNumber;
      const w = '(100% - ' + (apn - this.dividerWidthPxNumber) + 'px)/' + apn;
      const pageWidth = `calc(${w})`;
      const mainContainerMargin = `calc(-${Math.min(
        this.activePageNumber,
        threshold
      )} * ${w})`;
      const pages = this.elRef.nativeElement.querySelectorAll(
        '.app-multi-page-layout-items > :not(.divider)'
      );
      pages.forEach((page, idx) => {
        this.renderer.addClass(page, 'app-multi-page-layout-item');
        this.renderer.setStyle(page, 'minWidth', pageWidth);
      });
      this.renderer.setStyle(
        this.elRef.nativeElement.querySelector('.app-multi-page-layout-items'),
        'marginLeft',
        mainContainerMargin
      );
    }
  }
}
