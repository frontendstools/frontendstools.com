import { ReactNode } from 'react'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { PostFooter } from '@/components/PostFooter'
import CustomLink from '@/components/Link'

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function PostLayout({ content, next, prev, children }: LayoutProps) {
  const { slug, date, title } = content

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article id="article-content">
        <header>
          <div className="space-y-1 border-b pb-10 text-center">
            <PageTitle>{title}</PageTitle>
            <dl>
              <dt className="sr-only">Fecha publicación</dt>
              <dd className="text-base font-medium leading-6 text-gray-500">
                <time aria-label="fecha de publicación" dateTime={date}>
                  {formatDate(date, siteMetadata.locale)}
                </time>
              </dd>
            </dl>
          </div>
        </header>
        <div className="grid-rows-[auto_1fr] divide-y pb-8 xl:divide-y-0">
          <div className="divide-y xl:col-span-3 xl:row-span-2 xl:pb-0">
            <div className="prose max-w-none pb-8 pt-10 lg:prose-lg xl:prose-xl dark:prose-invert">
              {children}
            </div>
          </div>

          {siteMetadata.comments && (
            <div className="pb-6 pt-6 text-center" id="comment">
              <Comments slug={slug} />
            </div>
          )}

          <PostFooter slug={slug} next={next} prev={prev} />

          <footer>
            <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
              {prev && prev.path && (
                <div className="pt-4 text-left xl:pt-8">
                  <CustomLink
                    href={`/${prev.path}`}
                    aria-label={`Artículo anterior: ${prev.title}`}
                  >
                    &larr; {prev.title}
                  </CustomLink>
                </div>
              )}
              {next && next.path && (
                <div className="pt-4 text-right xl:pt-8">
                  <CustomLink
                    href={`/${next.path}`}
                    aria-label={`Siguiente artículo: ${next.title}`}
                  >
                    {next.title} &rarr;
                  </CustomLink>
                </div>
              )}
            </div>
          </footer>
        </div>
      </article>
    </SectionContainer>
  )
}
