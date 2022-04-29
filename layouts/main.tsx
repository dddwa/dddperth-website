import React from 'react'
import { Template, TemplateProps } from './template'
import { StyledMain } from './Layouts.styled'

export const Main = ({ title, description, image, children, showHero, showActionBar }: TemplateProps): JSX.Element => (
  <Template title={title} description={description} image={image} showHero={showHero} showActionBar={showActionBar}>
    <StyledMain id="content">{children}</StyledMain>
  </Template>
)
