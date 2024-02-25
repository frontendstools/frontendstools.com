import React, { FC, useEffect, useState } from 'react'
import CustomLink from '../Link'
import GithubIcon from '../../public/static/icons/github.svg'
import ChromeIcon from '../../public/static/icons/chrome.svg'
import BookIcon from '../../public/static/icons/book.svg'

interface ItemProps {
  title: string
  url: string
  icon?: React.ReactNode
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

const ItemLink: FC<ItemProps> = ({ title, url, icon }) => {
  return (
    <CustomLink
      className="flex items-center rounded-md border p-3 text-center hover:bg-gray-100 hover:text-blue-400 dark:border-gray-700 dark:md:hover:bg-gray-800"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
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
  <div className="flex justify-center gap-4 rounded-xl py-4 dark:border-gray-800 dark:bg-gray-700">
    {web && <ItemLink title={web.title} url={web.url} icon={<ChromeIcon className="mr-2" />} />}
    {github && (
      <ItemLink title={github.title} url={github.url} icon={<GithubIcon className="mr-2" />} />
    )}
    {documentation && (
      <ItemLink
        title={documentation.title}
        url={documentation.url}
        icon={<BookIcon className="mr-2" />}
      />
    )}
  </div>
)
