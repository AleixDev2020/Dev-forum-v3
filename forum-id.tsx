import { Layout } from '@/components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'

const threads = [
  { id: 1, title: 'How to optimize React performance?', author: 'user1', replies: 10 },
  { id: 2, title: 'Best practices for API design', author: 'user2', replies: 15 },
  { id: 3, title: 'Comparing different state management solutions', author: 'user3', replies: 8 },
]

export default function CategoryThreads() {
  const router = useRouter()
  const { categoryId } = router.query

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Threads in Category {categoryId}</h1>
      <div className="space-y-4">
        {threads.map((thread) => (
          <div key={thread.id} className="border p-4 rounded-lg">
            <Link href={`/forum/thread/${thread.id}`} className="text-xl font-semibold hover:underline">
              {thread.title}
            </Link>
            <p className="text-sm text-gray-600">
              By {thread.author} | {thread.replies} replies
            </p>
          </div>
        ))}
      </div>
    </Layout>
  )
}