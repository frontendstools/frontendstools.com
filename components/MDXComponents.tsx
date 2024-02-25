import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import { ContentTag } from '@/components/tagMenu/ContentTag'
import { CollectionMetaData } from '@/components/content-example/CollectionsMetaData'
import { RevertString } from '@/components/content-example/RevertString'
import { ConsoleLogArray } from '@/components/content-example/consoleLogArray'
import { ExternalLink } from '@/components/content-example/ExternalLink'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  ContentTag,
  CollectionMetaData,
  RevertString,
  ConsoleLogArray,
  ExternalLink,
}
