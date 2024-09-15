import { Layout } from '@/components/Layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Login() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form className="space-y-4 max-w-md">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" required />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" required />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </Layout>
  )
}