import React, { FC } from 'react'
import headerNavLinks from '@/data/headerNavLinks'
import CustomLink from '../Link'
import ThemeSwitch from '../ThemeSwitch'
import MobileNav from '../MobileNav'
import SearchButton from '../SearchButton'

export const HeaderLinks: FC = () => {
  return (
    <aside>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <CustomLink key={link.title} href={link.href} className="p-1 font-medium sm:p-4">
                {link.title}
              </CustomLink>
            ))}
        </div>
        <div className="flex gap-2">
          <SearchButton />
          <ThemeSwitch />
        </div>
        {headerNavLinks.length > 0 && <MobileNav />}
      </div>
    </aside>
  )
}
