import { Component } from '@angular/core';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-blog';
  myImage = new CloudinaryImage('sample', { cloudName: 'dppg3f01m' }).resize(
    fill().width(60).height(60)
  );
}
