import React from 'react'
import { Template, TemplateProps } from './template'
import { StyledMain } from './Layouts.styled'

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
    <StyledMain id="content">{children}</StyledMain>
  </Template>
)
