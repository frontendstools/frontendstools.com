import React, { FC } from 'react'
import { slug } from 'github-slugger'
import CustomLink from '../Link'
import { default as TagData } from '../../app/tag-data.json'

interface ITagProps {
  code?: string
}

const getTag = (code: string) => {
  return Object.keys(TagData).find((tag) => tag.toLocaleLowerCase() === code.toLocaleLowerCase())
}

export const ContentTag: FC<ITagProps> = ({ code }) => {
  if (!code) {
    return null
  }

  const tag = getTag(code)

  if (!tag) {
    return <span>{code}</span>
  }

  return (
    <CustomLink className="mr-1" title={`Ver todos tips etiquetados en ${tag}`} href={tag}>
      {tag}
    </CustomLink>
  )
}
