/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react'
import { slug } from 'github-slugger'

import Link from '@/components/Link'
import clsx from 'clsx'
import { default as TagData } from '../../app/tag-data.json'

import styles from './Tag.module.css'

interface TagListProps {
  className?: string
}

const getIconPath = (name: string) => {
  try {
    return require(`../../public/static/images/${slug(name)}.png`).default
  } catch (error) {
    return null
  }
}

export const TagMenu: FC<TagListProps> = ({ className }) => {
  const tags = Object.keys(TagData)
    .map((key) => {
      return {
        code: key,
        name: key,
        slug: `/tags/${slug(key)}`,
        icon: getIconPath(key),
        count: TagData[key],
      }
    })
    .filter(({ icon }) => Boolean(icon))

  return (
    <div className={clsx(styles.list, className)}>
      {tags
        .sort((accumulate, current) => accumulate.name.localeCompare(current.name))
        .map(({ name, slug, code, icon, count }) => {
          return (
            <Link
              title={`Ver todos ${count} tips etiquetados en ${name}`}
              href={slug}
              className={clsx(styles.link, styles[`icon-${code}`], `menu-button-${name}`)}
              key={code}
            >
              {icon && (
                <img
                  className={clsx(styles.icon, [styles[`icon-${name}`]])}
                  src={icon.src}
                  alt={name}
                />
              )}
              {name}
              <span className={styles.count}>{count}</span>
            </Link>
          )
        })}
    </div>
  )
}
