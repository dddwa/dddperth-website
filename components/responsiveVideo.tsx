import React from 'react'
import styled from './utils/styles/theme'

interface ResponsiveVideoArg {
  src: string
  title?: string
}

const StyledResponsiveVideo = styled('div')({
  flexGrow: 1,
  position: 'relative',
  width: '100%',
  maxWidth: '100%',
  height: 0,
  paddingBottom: '56.25%',
  overflow: 'hidden',

  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
})

const ResponsiveVideo: React.FC<ResponsiveVideoArg> = ({ src, title = 'YouTube Video Player' }) => (
  <StyledResponsiveVideo>
    <iframe title={title} src={src} frameBorder="0" allowFullScreen />
  </StyledResponsiveVideo>
)

export default ResponsiveVideo
