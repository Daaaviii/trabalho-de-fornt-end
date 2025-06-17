import {
  Directive,
  HostBinding,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appMultiPageLayoutItem]'
})
export class MultiPageLayoutItemDirective {
  constructor(public template: TemplateRef<void>) {}
}
