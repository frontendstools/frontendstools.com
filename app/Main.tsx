import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { TagMenu } from '@/components/tagMenu/TagList'
import { sendGTMEvent } from '@next/third-parties/google'

const MAX_DISPLAY = 15

export default function Home({ posts }) {
  return (
    <>
      <TagMenu />
      <div className="divide-y">
        <section className="divide-y">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <article key={slug} className="py-12">
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Fecha de publicación</dt>
                    <dd className="text-base font-medium leading-6">
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <header>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight hover:text-blue-500">
                          <Link href={`/blog/${slug}`}>{title}</Link>
                        </h2>
                        <div className="flex flex-wrap">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </header>
                      <div className="prose max-w-none">{summary}</div>
                    </div>
                    <div className="text-base font-medium leading-6">
                      <Link href={`/blog/${slug}`} aria-label={`Read more: "${title}"`}>
                        Leer completo &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </section>
      </div>

      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link href="/blog" aria-label="All posts">
            All Posts &rarr;
          </Link>
        </div>
      )}

      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
