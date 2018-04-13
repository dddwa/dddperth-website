import * as React from 'react'
import { Fragment, StatelessComponent } from 'react'
import { Image } from '../config/types'

interface ImageStripProps {
  images: Image[]
}

const ImageStrip: StatelessComponent<ImageStripProps> = ({ images }) => (
  <section className="image-strip">
    {images.map(i => (
      <Fragment key={i.Url}>
        <img src={i.Url} alt={i.Alternate} />{' '}
      </Fragment>
    ))}
  </section>
)

export default ImageStrip
