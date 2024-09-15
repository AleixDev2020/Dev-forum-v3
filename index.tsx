import { Layout } from '@/components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-6">Welcome to DevForum</h1>
      <p className="text-xl mb-4">Join our community of developers and discuss the latest in tech!</p>
      <div className="space-y-4">
        <Link href="/forum" className="block text-blue-600 hover:underline">
          Browse Forums
        </Link>
        <Link href="/search" className="block text-blue-600 hover:underline">
          Search Topics
        </Link>
        <Link href="/users" className="block text-blue-600 hover:underline">
          View Online Users
        </Link>
      </div>
    </Layout>
  )
}