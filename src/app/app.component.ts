import { Component } from '@angular/core';
import {
  ImageViewerConfig,
  CustomEvent,
} from '../../projects/ngx-imageviewer/src/lib/ngx-imageviewer-config.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ImageViewerDemo';

  images = [
    'https://i.ytimg.com/vi/nlYlNF30bVg/hqdefault.jpg',
    'https://www.askideas.com/media/10/Funny-Goat-Closeup-Pouting-Face.jpg',
    'https://via.placeholder.com/150/0000FF/808080',
  ];
  config: ImageViewerConfig = {
    customBtns: [
      { name: 'print', icon: 'fa fa-print' },
      { name: 'link', icon: 'fa fa-link' },
    ],
  };
  imageIndexOne = 0;
  handleEvent(event: CustomEvent) {
    console.log(`${event.name} has been click on img ${event.imageIndex + 1}`);

    switch (event.name) {
      case 'print':
        console.log('run print logic');
        break;
    }
  }
}
