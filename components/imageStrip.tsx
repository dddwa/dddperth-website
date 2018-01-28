import * as React from 'react';
import { StatelessComponent, Fragment } from 'react';
import Conference from '../config/conference';

interface ImageStripProps {
  images : string[];
}

const ImageStrip : StatelessComponent<ImageStripProps> = ({images}) =>
  <section className="image-strip">
    {images.map(i => <Fragment key={i}><img src={i} alt={Conference.Name + " photo"} />{" "}</Fragment>)}
  </section>;

export default ImageStrip;
