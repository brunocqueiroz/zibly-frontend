"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import DashboardNav from "@/components/dashboard-nav"
import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { getTeam, inviteMember, removeMemberAction, setSeatsAction, updateMemberRoleAction } from "@/app/actions/team"
import { MAX_SEATS } from "@/lib/pricing-config"

type Member = { name: string; email: string; role: string; status: string }
type Org = { name: string; seats: number; members: Member[] }

export default function TeamPage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [org, setOrg] = useState<Org | null>(null)
  const [loading, setLoading] = useState(true)
  const [inviteEmail, setInviteEmail] = useState("")
  const [inviteRole, setInviteRole] = useState("member")
  const [seatsInput, setSeatsInput] = useState<number>(1)

  const refresh = async () => {
    setLoading(true)
    const res = await getTeam()
    if ("error" in res) {
      toast({ variant: "destructive", title: "Error", description: res.error })
      setLoading(false)
      return
    }
    setOrg(res.org as Org)
    setSeatsInput(res.org.seats)
    setLoading(false)
  }

  useEffect(() => {
    refresh()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleInvite = async () => {
    const fd = new FormData()
    fd.append("email", inviteEmail)
    fd.append("role", inviteRole)
    const res = await inviteMember(fd)
    if ("error" in res) {
      toast({ variant: "destructive", title: "Error", description: res.error })
    } else {
      toast({ title: "Invite sent", description: `${inviteEmail} has been invited.` })
      setInviteEmail("")
      refresh()
    }
  }

  const handleRemove = async (email: string) => {
    const fd = new FormData()
    fd.append("email", email)
    const res = await removeMemberAction(fd)
    if ("error" in res) {
      toast({ variant: "destructive", title: "Error", description: res.error })
    } else {
      toast({ title: "Removed", description: `${email} removed from team.` })
      refresh()
    }
  }

  const handleRoleChange = async (email: string, role: string) => {
    const fd = new FormData()
    fd.append("email", email)
    fd.append("role", role)
    const res = await updateMemberRoleAction(fd)
    if ("error" in res) {
      toast({ variant: "destructive", title: "Error", description: res.error })
    } else {
      toast({ title: "Role updated" })
      refresh()
    }
  }

  const handleSeatsSave = async () => {
    const fd = new FormData()
    fd.append("seats", String(seatsInput))
    const res = await setSeatsAction(fd)
    if ("error" in res) {
      toast({ variant: "destructive", title: "Error", description: res.error })
    } else {
      toast({ title: "Seats updated" })
      refresh()
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6 lg:p-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Team</h1>
              <p className="text-muted-foreground">Manage members and seats for your organization</p>
            </div>

            {loading || !org ? (
              <div className="text-sm text-muted-foreground">Loading...</div>
            ) : (
              <>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Seats</CardTitle>
                      <CardDescription>{org.members.length} used of {org.seats} purchased</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Label htmlFor="seats">Seats</Label>
                      <div className="flex items-center gap-2">
                        <Input id="seats" type="number" min={1} max={MAX_SEATS} value={seatsInput} onChange={(e) => {
                          const v = parseInt(e.target.value || "1", 10)
                          setSeatsInput(Math.min(MAX_SEATS, Math.max(1, v)))
                        }} className="w-28" />
                        <Button onClick={handleSeatsSave} variant="outline" size="sm">Save</Button>
                        <Button asChild variant="ghost" size="sm">
                          <Link href="/dashboard/subscription">Adjust billing</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Invite Member</CardTitle>
                      <CardDescription>Send an invite by email</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2">
                        <Label htmlFor="inviteEmail">Email</Label>
                        <Input id="inviteEmail" placeholder="alex@company.com" value={inviteEmail} onChange={(e) => setInviteEmail(e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <Label>Role</Label>
                        <Select value={inviteRole} onValueChange={setInviteRole}>
                          <SelectTrigger className="w-48">
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="member">Member</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button onClick={handleInvite} className="bg-primary hover:bg-primary-600">Invite</Button>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Members</CardTitle>
                    <CardDescription>Current members of {org.name}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg border">
                      {org.members.length === 0 ? (
                        <div className="p-4 text-sm text-muted-foreground">No members yet</div>
                      ) : (
                        org.members.map((m) => (
                          <div key={m.email} className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 p-4 border-b last:border-b-0">
                            <div>
                              <div className="font-medium">{m.name}</div>
                              <div className="text-sm text-muted-foreground">{m.email}</div>
                            </div>
                            <div className="md:col-span-2">
                              <Label className="text-xs text-muted-foreground">Role</Label>
                              <Select defaultValue={m.role} onValueChange={(v) => handleRoleChange(m.email, v)}>
                                <SelectTrigger className="w-40 mt-1">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="member">Member</SelectItem>
                                  <SelectItem value="admin">Admin</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <div className="text-sm capitalize">{m.status}</div>
                            </div>
                            <div className="flex justify-end">
                              <Button variant="outline" size="sm" onClick={() => handleRemove(m.email)}>Remove</Button>
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
