export default function TermsPage() {
  return (
    <div className="container max-w-4xl px-4 py-12 md:px-6 md:py-24">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Terms of Service</h1>
          <p className="text-gray-500">Last updated: December 2024</p>
        </div>

        <div className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using zibly.ai, you accept and agree to be bound by the terms and provision of this
              agreement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Use of Service</h2>
            <p className="text-gray-600">
              You may use our service to send requests via email and receive AI-generated work products. You agree to
              use the service only for lawful purposes.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>You must be at least 18 years old to use this service</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You agree not to use the service for any illegal or unauthorized purpose</li>
              <li>You will not attempt to gain unauthorized access to our systems</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Billing and Payment</h2>
            <p className="text-gray-600">
              Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable except
              as required by law.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Intellectual Property</h2>
            <p className="text-gray-600">
              You retain ownership of any content you submit to our service. By using our service, you grant us a
              license to process your content to provide our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Limitation of Liability</h2>
            <p className="text-gray-600">
              zibly.ai shall not be liable for any indirect, incidental, special, consequential, or punitive damages
              resulting from your use of the service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Termination</h2>
            <p className="text-gray-600">
              We may terminate or suspend your account at any time for violations of these terms. You may cancel your
              subscription at any time.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms of Service, please contact us at support@zibly.ai.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
