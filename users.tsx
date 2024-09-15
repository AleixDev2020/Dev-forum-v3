import { Layout } from '@/components/Layout'
import Link from 'next/link'

const onlineUsers = [
  { id: 1, username: 'user1', lastActive: '2 minutes ago' },
  { id: 2, username: 'user2', lastActive: '5 minutes ago' },
  { id: 3, username: 'user3', lastActive: '10 minutes ago' },
]

export default function OnlineUsers() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Online Users</h1>
      <div className="space-y-4">
        {onlineUsers.map((user) => (
          <div key={user.id} className="border p-4 rounded-lg flex justify-between items-center">
            <Link href={`/profile/${user.id}`} className="text-xl font-semibold hover:underline">
              {user.username}
            </Link>
            <span className="text-sm text-gray-600">Last active: {user.lastActive}</span>
          </div>
        ))}
      </div>
    </Layout>
  )
}