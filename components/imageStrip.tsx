import * as React from 'react';
import { StatelessComponent } from 'react';
import Conference from '../config/conference';

interface ImageStripProps {
  images : string[];
}

const ImageStrip : StatelessComponent<ImageStripProps> = ({images}) =>
  <section className="image-strip">
    {images.map(i => <img src={i} alt={Conference.Name + " photo"} key={i} />)}
  </section>;

export default ImageStrip;
