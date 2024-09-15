import { Layout } from '@/components/Layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function EditProfile() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>
      <form className="space-y-4 max-w-md">
        <div>
          <Label htmlFor="username">Username</Label>
          <Input type="text" id="username" defaultValue="johndoe" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" defaultValue="john@example.com" />
        </div>
        <div>
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="Tell us about yourself..." />
        </div>
        <div>
          <Label htmlFor="new-password">New Password (leave blank to keep current)</Label>
          <Input type="password" id="new-password" />
        </div>
        <Button type="submit">Save Changes</Button>
      </form>
    </Layout>
  )
}