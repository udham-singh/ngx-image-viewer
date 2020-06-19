import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewerComponent } from './ngx-imageviewer.component';
import { ImageViewerConfig } from './ngx-imageviewer-config.model';
import { ToggleFullscreenDirective } from './fullscreen.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ImageViewerComponent, ToggleFullscreenDirective],
  exports: [ImageViewerComponent, ToggleFullscreenDirective],
})
export class ImageViewerModule {
  static forRoot(config?: ImageViewerConfig): ModuleWithProviders {
    return {
      ngModule: ImageViewerModule,
      providers: [{ provide: 'config', useValue: config }],
    };
  }
}
