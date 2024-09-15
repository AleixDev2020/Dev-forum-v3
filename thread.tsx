import { Layout } from '@/components/Layout'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useRouter } from 'next/router'

const thread = {
  id: 1,
  title: 'How to optimize React performance?',
  author: 'user1',
  content: 'I\'m working on a large React application and I\'m noticing some performance issues. What are some strategies to optimize React performance?',
  replies: [
    { id: 1, author: 'user2', content: 'One way to optimize React performance is to use React.memo for functional components that render often with the same props.' },
    { id: 2, author: 'user3', content: 'Another strategy is to use the useCallback hook to memoize callback functions, especially when passing them as props to child components.' },
  ],
}

export default function ThreadPage() {
  const router = useRouter()
  const { threadId } = router.query

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">{thread.title}</h1>
      <div className="mb-8">
        <p className="text-sm text-gray-600 mb-2">Posted by {thread.author}</p>
        <p>{thread.content}</p>
      </div>
      <h2 className="text-2xl font-bold mb-4">Replies</h2>
      <div className="space-y-4 mb-8">
        {thread.replies.map((reply) => (
          <div key={reply.id} className="border p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Reply by {reply.author}</p>
            <p>{reply.content}</p>
          </div>
        ))}
      </div>
      <form className="space-y-4">
        <Textarea placeholder="Write your reply..." />
        <Button type="submit">Post Reply</Button>
      </form>
    </Layout>
  )
}