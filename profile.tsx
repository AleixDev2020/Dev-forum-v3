import { Layout } from '@/components/Layout'
import { useRouter } from 'next/router'

const user = {
  id: 1,
  username: 'johndoe',
  email: 'john@example.com',
  joinDate: '2023-01-15',
  posts: 150,
}

export default function UserProfile() {
  const router = useRouter()
  const { userId } = router.query

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <div className="space-y-4">
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Join Date:</strong> {user.joinDate}
        </p>
        <p>
          <strong>Total Posts:</strong> {user.posts}
        </p>
      </div>
    </Layout>
  )
}