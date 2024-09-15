import { Layout } from '@/components/Layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

const searchResults = [
  { id: 1, title: 'How to optimize React performance?', category: 'Web Development' },
  { id: 2, title: 'Best practices for API design', category: 'Web Development' },
  { id: 3, title: 'Introduction to Kubernetes', category: 'DevOps' },
]

export default function Search() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Search</h1>
      <form className="mb-8 flex gap-2">
        <Input type="search" placeholder="Search threads..." className="flex-grow" />
        <Button type="submit">Search</Button>
      </form>
      <div className="space-y-4">
        {searchResults.map((result) => (
          <div key={result.id} className="border p-4 rounded-lg">
            <Link href={`/forum/thread/${result.id}`} className="text-xl font-semibold hover:underline">
              {result.title}
            </Link>
            <p className="text-sm text-gray-600">Category: {result.category}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}