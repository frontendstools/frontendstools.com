import ListLayout from '@/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import PageTitle from '@/components/PageTitle'
import Image from '@/components/Image'

const POSTS_PER_PAGE = 5

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(allBlogs.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))

  return paths
}

export default function Page({ params }: { params: { page: string } }) {
  return (
    <article>
      <PageTitle className="mb-6 text-center">Recursos frontend</PageTitle>
      <Image
        src="/static/images/react-19-hooks.jpg"
        alt="React 19 hooks"
        width={1920}
        height={1080}
      />
    </article>
  )
}
