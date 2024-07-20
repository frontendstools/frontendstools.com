import React, { FC } from 'react'
import { HeaderContainer } from './HeaderContainer'
import ThemeSwitch from '../ThemeSwitch'
import siteMetadata from '@/data/siteMetadata'
import { HeaderLinks } from './HeaderLinks'
import { Logo } from '../logo'

interface IHeaderProps {
  isHomePage?: boolean
}

export const Header: FC<IHeaderProps> = ({ isHomePage = false }) => {
  if (isHomePage) {
    return (
      <HeaderContainer>
        <div className="space-y-2 pt-8 text-center md:space-y-5 md:pt-6">
          <div className="flex items-center justify-center gap-4">
            <h1 className="md:leading-14 inline-block text-4xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl">
              {siteMetadata.headerTitle}
            </h1>
            <HeaderLinks />
          </div>
          <h2
            title={siteMetadata.description}
            aria-label={siteMetadata.description}
            className="text-xl leading-7 md:text-2xl"
          >
            {siteMetadata.description}
          </h2>
        </div>
      </HeaderContainer>
    )
  }

  return (
    <HeaderContainer>
      <Logo />
      <HeaderLinks />
    </HeaderContainer>
  )
}
