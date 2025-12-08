"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Mail, ShieldQuestion } from "lucide-react"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <h1 className="text-2xl tracking-tight inter-heading-normal text-black">Forgot your password?</h1>
            <p className="text-sm inter-text text-black">
              We&apos;ll help you get back into your account.
            </p>
          </div>

          <Card className="bg-white border-2 border-black">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <ShieldQuestion className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="inter-heading-normal text-black">Reset Your Password</CardTitle>
              <CardDescription className="inter-text text-black">
                To reset your password, please contact our support team.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="bg-secondary border-primary">
                <Mail className="h-4 w-4" />
                <AlertDescription className="text-sm text-black ml-2">
                  Send an email to{" "}
                  <a 
                    href="mailto:admin@zibly.ai?subject=Password%20Reset%20Request" 
                    className="font-semibold text-primary hover:underline"
                  >
                    admin@zibly.ai
                  </a>
                  {" "}with the subject &quot;Password Reset Request&quot; and include the email address associated with your account.
                </AlertDescription>
              </Alert>

              <div className="rounded-lg bg-gray-50 p-4 space-y-2">
                <p className="text-sm font-medium text-black">What to include in your email:</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Your account email address</li>
                  <li>Your full name</li>
                  <li>Any additional verification details</li>
                </ul>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                Our team typically responds within 24 hours during business days.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col space-y-3">
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <a href="mailto:admin@zibly.ai?subject=Password%20Reset%20Request">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Support
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full border-2 border-black">
                <Link href="/login">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to login
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <div className="text-center text-sm inter-text text-black">
            Remember your password?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
