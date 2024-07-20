import siteMetadata from '@/data/siteMetadata'
import React, { FC } from 'react'
import CustomLink from './Link'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/edit/main/data/blog/${fileName}.mdx`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${slug}`)}`

interface IPostFooterProps {
  slug: string
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export const PostFooter: FC<IPostFooterProps> = ({ slug, next, prev }) => {
  return (
    <>
      <div className="pb-6 pt-6 text-sm">
        <CustomLink href={discussUrl(slug)} rel="nofollow">
          {'Discusión en Twitter'}
        </CustomLink>
        {` • `}
        <CustomLink href={editUrl(slug)}>
          {' ¿Algún error? Edita el artículo en github'}
        </CustomLink>{' '}
      </div>
    </>
  )
}
