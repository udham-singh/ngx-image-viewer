import {
  Directive,
  HostListener,
  OnChanges,
  Input,
  ElementRef,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[ngxToggleFullscreen]',
})
export class ToggleFullscreenDirective implements OnChanges {
  @Input('ngxToggleFullscreen')
  isFullscreen: boolean;
  element;
  isEnabled: boolean;
  constructor(private el: ElementRef, @Inject(DOCUMENT) private document: any) {
    this.element = this.el.nativeElement;
    this.isEnabled = this.document.fullscreenEnabled;
  }

  ngOnChanges() {
    if (this.isFullscreen && this.isEnabled) {
      this.openFullscreen();
    } else if (this.isEnabled) {
      this.closeFullscreen();
    }
  }

  openFullscreen() {
    const methodToBeInvoked =
      this.element.requestFullscreen ||
      this.element.mozRequestFullScreen ||
      this.element.msRequestFullscreen ||
      this.element.webkitRequestFullscreen;
    if (methodToBeInvoked) {
      methodToBeInvoked.call(this.element);
    }
  }

  closeFullscreen() {
    if (!this.document.fullscreenElement) {
      return;
    }

    const methodToBeInvoked =
      this.document.exitFullscreen ||
      this.document.mozCancelFullScreen ||
      this.document.webkitExitFullscreen ||
      this.document.msExitFullscreen;
    if (methodToBeInvoked) {
      methodToBeInvoked.call(this.document);
    }
  }
}
