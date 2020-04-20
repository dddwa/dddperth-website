import React from 'react'
import { Template, TemplateProps } from './template'
import { StyledMain } from './Layouts.styled'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MainProps extends TemplateProps {}

export const Main: React.FC<MainProps> = ({ title, description, image, metadata, children, showHero }) => (
  <Template title={title} description={description} image={image} metadata={metadata} showHero={showHero}>
    <StyledMain id="content">{children}</StyledMain>
  </Template>
)
