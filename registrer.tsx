import { Layout } from '@/components/Layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Register() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Register</h1>
      <form className="space-y-4 max-w-md">
        <div>
          <Label htmlFor="username">Username</Label>
          <Input type="text" id="username" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" required />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" required />
        </div>
        <div>
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <Input type="password" id="confirm-password" required />
        </div>
        <Button type="submit">Register</Button>
      </form>
    </Layout>
  )
}