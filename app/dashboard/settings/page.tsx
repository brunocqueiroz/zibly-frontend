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
import { useAuth } from "@/components/auth-provider"

export default function SettingsPage() {
  const { user, refetch } = useAuth()
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
      const formData = new FormData(e.currentTarget)
      
      // Add user ID for the server action
      const userId = user?.id?.toString() || ""
      formData.append("userId", userId)
      
      const result = await updateProfile(formData)

      if (result.error) {
        setProfileError(result.error)
      } else {
        toast({
          title: "Success",
          description: "Your profile has been updated.",
        })
        // Refresh user data from API to show updated profile
        await refetch()
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
      const formData = new FormData(e.currentTarget)
      
      // Add user ID for the server action
      const userId = user?.id?.toString() || ""
      formData.append("userId", userId)


      const result = await updatePassword(formData)

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
      const formData = new FormData(e.currentTarget)
      
      // Add user ID for the server action
      const userId = user?.id?.toString() || ""
      formData.append("userId", userId)
      
      const result = await updateNotificationPreferences(formData)

      if (result.error) {
        setNotificationsError(result.error)
      } else {
        toast({
          title: "Success",
          description: "Your notification preferences have been updated.",
        })
        // Refresh user data from API to show updated preferences
        await refetch()
      }
    } catch (error) {
      setNotificationsError("Something went wrong")
    } finally {
      setIsNotificationsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6 lg:p-8 bg-white">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-black">Settings</h1>
              <p className="text-black">Manage your account settings</p>
            </div>

            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-4 pt-4">
                <Card className="bg-white border-2 border-black">
                  <form onSubmit={handleProfileSubmit}>
                    <CardHeader>
                      <CardTitle className="text-black">Profile</CardTitle>
                      <CardDescription className="text-primary">Update your personal information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {profileError && (
                        <Alert variant="destructive">
                          <AlertDescription>{profileError}</AlertDescription>
                        </Alert>
                      )}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first_name">First Name</Label>
                          <Input 
                            id="first_name" 
                            name="first_name" 
                            defaultValue={user?.first_name || ""} 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last_name">Last Name</Label>
                          <Input 
                            id="last_name" 
                            name="last_name" 
                            defaultValue={user?.last_name || ""} 
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          defaultValue={user?.email || ""} 
                          disabled
                          className="bg-muted"
                        />
                        <p className="text-xs text-muted-foreground">Email cannot be changed after account creation</p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input 
                          id="company" 
                          name="company" 
                          defaultValue={user?.company || ""} 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Website (Optional)</Label>
                        <Input 
                          id="website" 
                          name="website" 
                          type="url" 
                          placeholder="https://example.com"
                          defaultValue={user?.website || ""} 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio (Optional)</Label>
                        <Input 
                          id="bio" 
                          name="bio" 
                          placeholder="Tell us about yourself"
                          defaultValue={user?.bio || ""} 
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button type="submit" disabled={isProfileLoading} className="bg-primary hover:bg-primary/90">
                        {isProfileLoading ? "Saving..." : "Save Changes"}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="space-y-4 pt-4">
                <Card className="bg-white border-2 border-black">
                  <form onSubmit={handleNotificationsSubmit}>
                    <CardHeader>
                      <CardTitle className="text-black">Notifications</CardTitle>
                      <CardDescription className="text-primary">Configure how you receive notifications</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {notificationsError && (
                        <Alert variant="destructive">
                          <AlertDescription>{notificationsError}</AlertDescription>
                        </Alert>
                      )}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-black">Email Notifications</div>
                          <div className="text-sm text-black">
                            Receive email notifications about your account
                          </div>
                        </div>
                        <Switch name="email" defaultChecked={user?.preferences?.notifications?.email ?? true} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-black">Usage Alerts</div>
                          <div className="text-sm text-black">
                            Get notified when you're approaching your usage limit
                          </div>
                        </div>
                        <Switch name="usage" defaultChecked={user?.preferences?.notifications?.usage ?? false} />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-black">Marketing Emails</div>
                          <div className="text-sm text-black">
                            Receive updates about new features and promotions
                          </div>
                        </div>
                        <Switch name="marketing" defaultChecked={user?.preferences?.notifications?.marketing ?? false} />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        type="submit"
                        className="bg-primary hover:bg-primary/90"
                        disabled={isNotificationsLoading}
                      >
                        {isNotificationsLoading ? "Saving..." : "Save Preferences"}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="space-y-4 pt-4">
                <Card className="bg-white border-2 border-black">
                  <form onSubmit={handlePasswordSubmit}>
                    <CardHeader>
                      <CardTitle className="text-black">Change Password</CardTitle>
                      <CardDescription className="text-primary">Update your password</CardDescription>
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
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" name="confirmPassword" type="password" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={isPasswordLoading}>
                        {isPasswordLoading ? "Updating..." : "Update Password"}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>

                <Card className="bg-white border-2 border-black">
                  <CardHeader>
                    <CardTitle className="text-black">Two-Factor Authentication</CardTitle>
                    <CardDescription className="text-primary">Add an extra layer of security to your account</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-black">Two-Factor Authentication</div>
                        <div className="text-sm text-black">Secure your account with 2FA</div>
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
