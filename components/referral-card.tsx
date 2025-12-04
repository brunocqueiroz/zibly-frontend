"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Copy, Check, Share2, Gift, Users } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ReferralCardProps {
  userEmail: string
}

export function ReferralCard({ userEmail }: ReferralCardProps) {
  const [referralCode, setReferralCode] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    fetchReferralCode()
  }, [userEmail])

  async function fetchReferralCode() {
    try {
      setLoading(true)
      const response = await fetch(`/api/referral?email=${encodeURIComponent(userEmail)}`)
      if (response.ok) {
        const data = await response.json()
        setReferralCode(data.referralCode)
      }
    } catch (error) {
      console.error("Failed to fetch referral code:", error)
    } finally {
      setLoading(false)
    }
  }

  const referralLink = referralCode
    ? `https://zibly.ai/signup?ref=${referralCode}`
    : ""

  async function copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      toast({
        title: "Copied!",
        description: "Referral link copied to clipboard",
      })
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast({
        title: "Failed to copy",
        description: "Please copy the link manually",
        variant: "destructive",
      })
    }
  }

  async function shareReferral() {
    if (!referralCode) return

    const shareData = {
      title: "Try Zibly - AI Email Assistant",
      text: "I've been using Zibly to handle my work tasks via email. Use my referral code to get 20% off your first month!",
      url: referralLink,
    }

    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData)
      } else {
        copyToClipboard(referralLink)
      }
    } catch {
      // User cancelled or share failed
    }
  }

  if (loading) {
    return (
      <Card className="border-2 border-black">
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-2 border-black">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Gift className="h-5 w-5" />
          Refer Friends & Earn Discounts
        </CardTitle>
        <CardDescription>
          Share your referral code and you both get 20% off for one month
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Referral Code Display */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Your Referral Code</label>
          <div className="flex gap-2">
            <Input
              value={referralCode || "Loading..."}
              readOnly
              className="font-mono text-lg font-bold border-2 border-black"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => copyToClipboard(referralCode || "")}
              className="border-2 border-black"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Referral Link */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Referral Link</label>
          <div className="flex gap-2">
            <Input
              value={referralLink || "Loading..."}
              readOnly
              className="text-sm border-2 border-black"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => copyToClipboard(referralLink)}
              className="border-2 border-black"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Share Button */}
        <Button
          onClick={shareReferral}
          className="w-full bg-black text-white hover:bg-gray-800"
        >
          <Share2 className="h-4 w-4 mr-2" />
          Share Referral Link
        </Button>

        {/* How It Works */}
        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
          <h4 className="font-semibold text-sm">How it works</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="font-bold text-black">1.</span>
              Share your unique referral code or link with friends
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-black">2.</span>
              When they sign up using your code, they get 20% off their first month
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-black">3.</span>
              You also get 20% off your next month's subscription
            </li>
          </ul>
        </div>

        {/* Stats (optional - can be populated later) */}
        <div className="flex items-center justify-center gap-6 pt-2 border-t">
          <div className="text-center">
            <Users className="h-5 w-5 mx-auto text-gray-400" />
            <p className="text-2xl font-bold">0</p>
            <p className="text-xs text-gray-500">Referrals</p>
          </div>
          <div className="text-center">
            <Gift className="h-5 w-5 mx-auto text-gray-400" />
            <p className="text-2xl font-bold">$0</p>
            <p className="text-xs text-gray-500">Earned</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
