import * as React from 'react';
import { StatelessComponent, Fragment } from 'react';
import Conference from '../config/conference';

interface ImageStripProps {
  images : string[];
}

const ImageStrip : StatelessComponent<ImageStripProps> = ({images}) =>
  <section className="image-strip">
    {images.map(i => <Fragment><img src={i} alt={Conference.Name + " photo"} key={i} />{" "}</Fragment>)}
  </section>;

export default ImageStrip;
