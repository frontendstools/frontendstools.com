import React, { FC, useEffect, useState } from 'react'
import CustomLink from '../Link'
import GithubIcon from '../../public/static/icons/github.svg'
import ChromeIcon from '../../public/static/icons/chrome.svg'
import BookIcon from '../../public/static/icons/book.svg'
import clsx from 'clsx'

interface ItemProps {
  title: string
  url: string
  icon?: React.ReactNode
  className?: string
}

interface ICollectionMetaDataProps {
  documentation?: ItemProps
  web?: ItemProps
  github?: ItemProps
}

interface GithubRepoProps {
  network_count: number
  stargazers_count: number
  subscribers_count: number
  watchers_count: number
}

const ItemLink: FC<ItemProps> = ({ title, url, icon, className }) => {
  return (
    <CustomLink
      className={clsx('flex items-center', className)}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      {icon} {title}
    </CustomLink>
  )
}

export const CollectionMetaData: FC<ICollectionMetaDataProps> = ({
  web,
  github,
  documentation,
}) => (
  <div className="flex gap-4 rounded-xl py-4">
    {web && (
      <ItemLink
        className="external-web"
        title={web.title}
        url={web.url}
        icon={<ChromeIcon className="mr-2" />}
      />
    )}

    {github && (
      <ItemLink
        className="external-github"
        title={github.title}
        url={github.url}
        icon={<GithubIcon className="mr-2" />}
      />
    )}

    {documentation && (
      <ItemLink
        className="external-documentation"
        title={documentation.title}
        url={documentation.url}
        icon={<BookIcon className="mr-2" />}
      />
    )}
  </div>
)
