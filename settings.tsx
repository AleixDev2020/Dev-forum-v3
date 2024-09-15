import { Layout } from '@/components/Layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

export default function AccountSettings() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Account Settings</h1>
      <form className="space-y-6 max-w-md">
        <div>
          <h2 className="text-xl font-semibold mb-2">Notification Preferences</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <Switch id="email-notifications" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="push-notifications">Push Notifications</Label>
              <Switch id="push-notifications" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Privacy Settings</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="profile-visibility">Public Profile</Label>
              <Switch id="profile-visibility" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="show-online-status">Show Online Status</Label>
              <Switch id="show-online-status" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Change Password</h2>
          <div className="space-y-2">
            <div>
              <Label htmlFor="current-password">Current Password</Label>
              <Input type="password" id="current-password" />
            </div>
            <div>
              <Label htmlFor="new-password">New Password</Label>
              <Input type="password" id="new-password" />
            </div>
            <div>
              <Label htmlFor="confirm-new-password">Confirm New Password</Label>
              <Input type="password" id="confirm-new-password" />
            </div>
          </div>
        </div>
        <Button type="submit">Save Settings</Button>
      </form>
    </Layout>
  )
}