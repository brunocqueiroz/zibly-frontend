"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import DashboardNav from "@/components/dashboard-nav"
import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, UserPlus, Crown, Shield, Loader2, Building2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { MAX_SEATS } from "@/lib/pricing-config"

type Member = { name: string; email: string; role: string; status: string }
type Org = { name: string; seats: number; members: Member[] }

export default function TeamPage() {
  const { user, loading: authLoading } = useAuth()
  const { toast } = useToast()
  const [org, setOrg] = useState<Org | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [inviteEmail, setInviteEmail] = useState("")
  const [inviteRole, setInviteRole] = useState("member")
  const [seatsInput, setSeatsInput] = useState<number>(1)

  const refresh = async () => {
    if (!user) return

    setLoading(true)
    setError(null)

    try {
      // For now, show the logged-in user as the team
      // Team management requires company setup
      const personalOrg: Org = {
        name: user.company || "Personal Account",
        seats: 1,
        members: [
          {
            name: user.name || `${user.first_name || ""} ${user.last_name || ""}`.trim() || user.email,
            email: user.email,
            role: "admin",
            status: "active"
          }
        ]
      }
      setOrg(personalOrg)
      setSeatsInput(1)
    } catch (e: any) {
      setError(e?.message || "Failed to load team data")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user && !authLoading) {
      refresh()
    }
  }, [user, authLoading])

  const handleInvite = async () => {
    // Team invites require enterprise setup - show upgrade prompt
    toast({
      title: "Team feature",
      description: "Team invites are available on Professional and Enterprise plans. Please upgrade or contact support."
    })
  }

  const handleRemove = async (email: string) => {
    if (email === user?.email) {
      toast({
        variant: "destructive",
        title: "Cannot remove yourself",
        description: "You cannot remove yourself from your own team."
      })
      return
    }
    toast({
      title: "Team feature",
      description: "Team management is available on Professional and Enterprise plans."
    })
  }

  const handleRoleChange = async (email: string, role: string) => {
    toast({
      title: "Team feature",
      description: "Role management is available on Professional and Enterprise plans."
    })
  }

  const handleSeatsSave = async () => {
    // Redirect to subscription page to manage seats
    toast({
      title: "Manage seats",
      description: "Please visit the Subscription page to adjust your seat count."
    })
  }

  // Show loading while auth is checking
  if (authLoading) {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <div className="flex flex-1">
          <DashboardNav />
          <main className="flex-1 p-6 lg:p-8 bg-white">
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="ml-2 text-black">Loading...</span>
            </div>
          </main>
        </div>
      </div>
    )
  }

  // Require login
  if (!user) {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <div className="flex flex-1">
          <DashboardNav />
          <main className="flex-1 p-6 lg:p-8 bg-white">
            <div className="text-center py-12">
              <h1 className="text-2xl font-bold text-black mb-4">Please sign in</h1>
              <p className="text-black">You need to be signed in to view your team.</p>
            </div>
          </main>
        </div>
      </div>
    )
  }

  const hasCompany = !!user.company

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6 lg:p-8 bg-white">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-8 w-8 text-primary" />
                <h1 className="text-3xl font-bold text-black">Team</h1>
              </div>
              <p className="text-black">Manage members and seats for your organization</p>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-center space-y-2">
                  <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
                  <div className="text-sm text-black">Loading team data...</div>
                </div>
              </div>
            ) : error ? (
              <Card className="bg-white border-2 border-black">
                <CardContent className="p-8 text-center">
                  <p className="text-red-600 mb-4">{error}</p>
                  <Button onClick={refresh} variant="outline">Try Again</Button>
                </CardContent>
              </Card>
            ) : !org ? (
              <Card className="bg-white border-2 border-black">
                <CardContent className="p-8 text-center">
                  <p className="text-black">No team data available</p>
                </CardContent>
              </Card>
            ) : (
              <>
                {/* Show setup prompt if no company */}
                {!hasCompany && (
                  <Card className="bg-blue-50 border-2 border-blue-200">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Building2 className="h-8 w-8 text-blue-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-black mb-1">Set up your organization</h3>
                          <p className="text-black text-sm mb-3">
                            Add a company name in your settings to enable team features like inviting members and managing seats.
                          </p>
                          <Button asChild variant="outline" size="sm" className="border-2 border-black">
                            <Link href="/dashboard/settings">Go to Settings</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Team Overview Stats */}
                <div className="grid gap-6 md:grid-cols-3 mb-6">
                  <Card className="bg-white border-2 border-black">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Total Members</p>
                          <p className="text-2xl font-bold text-black">{org.members.length}</p>
                        </div>
                        <Users className="h-8 w-8 text-primary ml-auto" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-2 border-black">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Active Users</p>
                          <p className="text-2xl font-bold text-black">{org.members.filter(m => m.status === 'active').length}</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800 ml-auto">Active</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-2 border-black">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Admins</p>
                          <p className="text-2xl font-bold text-black">{org.members.filter(m => m.role === 'admin').length}</p>
                        </div>
                        <Crown className="h-8 w-8 text-yellow-500 ml-auto" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="bg-white border-2 border-black">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-black">Seats</CardTitle>
                      <CardDescription className="text-primary">{org.members.length} used of {org.seats} purchased</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Label htmlFor="seats">Seats</Label>
                      <div className="flex items-center gap-2">
                        <Input
                          id="seats"
                          type="number"
                          min={1}
                          max={MAX_SEATS}
                          value={seatsInput}
                          onChange={(e) => {
                            const v = parseInt(e.target.value || "1", 10)
                            setSeatsInput(Math.min(MAX_SEATS, Math.max(1, v)))
                          }}
                          className="w-28"
                          disabled={!hasCompany}
                        />
                        <Button
                          onClick={handleSeatsSave}
                          variant="outline"
                          size="sm"
                          className="border-2 border-black text-black hover:bg-black hover:text-white"
                          disabled={!hasCompany}
                        >
                          Save
                        </Button>
                        <Button asChild variant="ghost" size="sm">
                          <Link href="/dashboard/subscription">Adjust billing</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-2 border-black">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-black">
                        <UserPlus className="h-5 w-5" />
                        Invite Member
                      </CardTitle>
                      <CardDescription className="text-primary">Send an invite by email</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2">
                        <Label htmlFor="inviteEmail">Email</Label>
                        <Input
                          id="inviteEmail"
                          placeholder="colleague@company.com"
                          value={inviteEmail}
                          onChange={(e) => setInviteEmail(e.target.value)}
                          disabled={!hasCompany}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Role</Label>
                        <Select value={inviteRole} onValueChange={setInviteRole} disabled={!hasCompany}>
                          <SelectTrigger className="w-48">
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="member">Member</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button
                        onClick={handleInvite}
                        className="bg-primary hover:bg-primary/90"
                        disabled={!hasCompany || !inviteEmail}
                      >
                        Invite
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-white border-2 border-black">
                  <CardHeader>
                    <CardTitle className="text-black">Members</CardTitle>
                    <CardDescription className="text-primary">
                      {hasCompany ? `Current members of ${org.name}` : "Your account"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg border-2 border-black">
                      {org.members.length === 0 ? (
                        <div className="p-4 text-sm text-black">No members yet</div>
                      ) : (
                        org.members.map((m) => (
                          <div key={m.email} className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 p-4 border-b-2 last:border-b-0 border-black hover:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="text-sm font-medium text-primary">
                                  {m.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                                </span>
                              </div>
                              <div>
                                <div className="font-medium text-black flex items-center gap-2">
                                  {m.name}
                                  {m.role === 'admin' && <Crown className="h-4 w-4 text-yellow-500" />}
                                  {m.email === user.email && (
                                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">You</span>
                                  )}
                                </div>
                                <div className="text-sm text-gray-600">{m.email}</div>
                              </div>
                            </div>
                            <div className="md:col-span-2">
                              <Label className="text-xs text-black">Role</Label>
                              <Select
                                defaultValue={m.role}
                                onValueChange={(v) => handleRoleChange(m.email, v)}
                                disabled={!hasCompany || m.email === user.email}
                              >
                                <SelectTrigger className="w-40 mt-1">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="member">
                                    <div className="flex items-center gap-2">
                                      <Shield className="h-4 w-4" />
                                      Member
                                    </div>
                                  </SelectItem>
                                  <SelectItem value="admin">
                                    <div className="flex items-center gap-2">
                                      <Crown className="h-4 w-4" />
                                      Admin
                                    </div>
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Badge
                                variant={m.status === 'active' ? 'default' : 'secondary'}
                                className={m.status === 'active' ? 'bg-green-100 text-green-800 hover:bg-green-100' : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'}
                              >
                                {m.status}
                              </Badge>
                            </div>
                            <div className="flex justify-end">
                              {m.email !== user.email && hasCompany && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleRemove(m.email)}
                                  className="border-2 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300"
                                >
                                  Remove
                                </Button>
                              )}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
