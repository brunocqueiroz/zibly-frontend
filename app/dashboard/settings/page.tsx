"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Alert, AlertDescription } from "@/components/ui/alert"
import DashboardNav from "@/components/dashboard-nav"
import { updateProfile, updatePassword, updateNotificationPreferences } from "@/app/actions/user"
import { useToast } from "@/components/ui/use-toast"
import { useSession } from "@/components/auth-provider"

export default function SettingsPage() {
  const { data: session } = useSession()
  const user = session?.user
  const [isProfileLoading, setIsProfileLoading] = useState(false)
  const [isPasswordLoading, setIsPasswordLoading] = useState(false)
  const [isNotificationsLoading, setIsNotificationsLoading] = useState(false)
  const [profileError, setProfileError] = useState<string | null>(null)
  const [passwordError, setPasswordError] = useState<string | null>(null)
  const [notificationsError, setNotificationsError] = useState<string | null>(null)
  const { toast } = useToast()

  const handleProfileSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsProfileLoading(true)
    setProfileError(null)

    try {
      const result = await updateProfile(new FormData(e.currentTarget))

      if (result.error) {
        setProfileError(result.error)
      } else {
        toast({
          title: "Success",
          description: "Your profile has been updated.",
        })
      }
    } catch (error) {
      setProfileError("Something went wrong")
    } finally {
      setIsProfileLoading(false)
    }
  }

  const handlePasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPasswordLoading(true)
    setPasswordError(null)

    try {
      const result = await updatePassword(new FormData(e.currentTarget))

      if (result.error) {
        setPasswordError(result.error)
      } else {
        toast({
          title: "Success",
          description: "Your password has been updated.",
        })
        // Reset form
        e.currentTarget.reset()
      }
    } catch (error) {
      setPasswordError("Something went wrong")
    } finally {
      setIsPasswordLoading(false)
    }
  }

  const handleNotificationsSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsNotificationsLoading(true)
    setNotificationsError(null)

    try {
      const result = await updateNotificationPreferences(new FormData(e.currentTarget))

      if (result.error) {
        setNotificationsError(result.error)
      } else {
        toast({
          title: "Success",
          description: "Your notification preferences have been updated.",
        })
      }
    } catch (error) {
      setNotificationsError("Something went wrong")
    } finally {
      setIsNotificationsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6 lg:p-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Settings</h1>
              <p className="text-muted-foreground">Manage your account settings</p>
            </div>

            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-4 pt-4">
                <Card>
                  <form onSubmit={handleProfileSubmit}>
                    <CardHeader>
                      <CardTitle>Profile</CardTitle>
                      <CardDescription>Update your personal information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {profileError && (
                        <Alert variant="destructive">
                          <AlertDescription>{profileError}</AlertDescription>
                        </Alert>
                      )}
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" defaultValue={user?.name || ""} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" defaultValue={user?.email || ""} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input id="company" name="company" defaultValue={user?.company || ""} />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button type="submit" disabled={isProfileLoading} className="bg-primary hover:bg-primary-600">
                        {isProfileLoading ? "Saving..." : "Save Changes"}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="space-y-4 pt-4">
                <Card>
                  <form onSubmit={handleNotificationsSubmit}>
                    <CardHeader>
                      <CardTitle>Notifications</CardTitle>
                      <CardDescription>Configure how you receive notifications</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {notificationsError && (
                        <Alert variant="destructive">
                          <AlertDescription>{notificationsError}</AlertDescription>
                        </Alert>
                      )}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Email Notifications</div>
                          <div className="text-sm text-muted-foreground">
                            Receive email notifications about your account
                          </div>
                        </div>
                        <Switch name="emailNotifications" defaultChecked={user?.notifications?.emailNotifications} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Usage Alerts</div>
                          <div className="text-sm text-muted-foreground">
                            Get notified when you're approaching your usage limit
                          </div>
                        </div>
                        <Switch name="usageAlerts" defaultChecked={user?.notifications?.usageAlerts} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Marketing Emails</div>
                          <div className="text-sm text-muted-foreground">
                            Receive updates about new features and promotions
                          </div>
                        </div>
                        <Switch name="marketingEmails" defaultChecked={user?.notifications?.marketingEmails} />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        type="submit"
                        className="bg-primary hover:bg-primary-600"
                        disabled={isNotificationsLoading}
                      >
                        {isNotificationsLoading ? "Saving..." : "Save Preferences"}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="space-y-4 pt-4">
                <Card>
                  <form onSubmit={handlePasswordSubmit}>
                    <CardHeader>
                      <CardTitle>Change Password</CardTitle>
                      <CardDescription>Update your password</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {passwordError && (
                        <Alert variant="destructive">
                          <AlertDescription>{passwordError}</AlertDescription>
                        </Alert>
                      )}
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" name="currentPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" name="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPasswor">Confirm New Password</Label>
                        <Input id="confirmPassword" name="confirmPassword" type="password" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button type="submit" className="bg-primary hover:bg-primary-600" disabled={isPasswordLoading}>
                        {isPasswordLoading ? "Updating..." : "Update Password"}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Two-Factor Authentication</CardTitle>
                    <CardDescription>Add an extra layer of security to your account</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Two-Factor Authentication</div>
                        <div className="text-sm text-muted-foreground">Secure your account with 2FA</div>
                      </div>
                      <Switch />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
