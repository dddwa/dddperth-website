import React from 'react'
import { Template, TemplateProps } from './template'
import { StyledAgenda } from './Layouts.styled'

export const Main = ({
  title,
  description,
  image,
  children,
  showHero,
  showActionBar,
  pageBanner,
}: TemplateProps): JSX.Element => (
  <Template
    title={title}
    description={description}
    image={image}
    showHero={showHero}
    showActionBar={showActionBar}
    pageBanner={pageBanner}
  >
    <StyledAgenda id="content">{children}</StyledAgenda>
  </Template>
)
