import * as React from 'react'
import { Fragment, StatelessComponent } from 'react'

interface ImageStripProps {
  images: string[]
  conferenceName: string
}

const ImageStrip: StatelessComponent<ImageStripProps> = ({
  images,
  conferenceName,
}) => (
  <section className="image-strip">
    {images.map(i => (
      <Fragment key={i}>
        <img src={i} alt={conferenceName + ' photo'} />{' '}
      </Fragment>
    ))}
  </section>
)

export default ImageStrip
