import { Layout } from '@/components/Layout'
import Link from 'next/link'

const categories = [
  { id: 1, name: 'Web Development', threads: 150 },
  { id: 2, name: 'Mobile Development', threads: 120 },
  { id: 3, name: 'DevOps', threads: 80 },
  { id: 4, name: 'Machine Learning', threads: 100 },
]

export default function ForumIndex() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Forum Categories</h1>
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.id} className="border p-4 rounded-lg">
            <Link href={`/forum/${category.id}`} className="text-xl font-semibold hover:underline">
              {category.name}
            </Link>
            <p className="text-sm text-gray-600">{category.threads} threads</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}