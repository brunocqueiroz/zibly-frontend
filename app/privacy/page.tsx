import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy – Zibly',
  description: 'Learn how Zibly collects, uses, and protects your information. Request deletion at any time.',
  alternates: { canonical: 'https://www.zibly.ai/privacy' },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-4xl px-4 py-12 md:px-6 md:py-24">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: December 2024</p>
        </div>

        <div className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Information We Collect</h2>
            <p className="text-gray-700">
              We collect information you provide directly to us, such as when you create an account, send emails to our
              service, or contact us for support.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Account information (name, email address, billing information)</li>
              <li>Email content and attachments you send to our service</li>
              <li>Usage data and analytics</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">How We Use Your Information</h2>
            <p className="text-gray-700">
              We use the information we collect to provide, maintain, and improve our services.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Process your requests and deliver work products</li>
              <li>Manage your account and billing</li>
              <li>Improve service quality and reliability</li>
              <li>Send important updates and notifications</li>
              <li>Provide customer support</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate security measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Data Retention</h2>
            <p className="text-gray-700">
              We retain your information for as long as necessary to provide our services and comply with legal
              obligations. You can request deletion of your data at any time.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at support@zibly.ai.
            </p>
          </section>
        </div>
      </div>
      </div>
    </div>
  )
}
