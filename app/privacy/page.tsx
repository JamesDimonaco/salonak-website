import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for SALONAK services.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-sm text-gray-600">Last Updated: 01/01/2025</p>

        {/* 1. Introduction */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to SALONAK! This Privacy Policy explains how we collect,
            use, and protect your personal data when you use our platform as a{" "}
            <em>Client</em> or <em>Professional</em>. By using SALONAK, you
            agree to the practices described in this policy.
          </p>
        </section>

        {/* 2. Who We Are */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">2. Who We Are</h2>
          <p>
            SALONAK is a booking platform connecting clients with beauty and
            grooming professionals for at-home services. We are committed to
            protecting your privacy and ensuring compliance with{" "}
            <em>UK GDPR</em> and other applicable laws.
          </p>
        </section>

        {/* 3. Information We Collect */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. Information We Collect
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">3.1 For Clients</h3>
            <ul className="list-disc pl-6">
              <li>
                <em>Identification Data</em>: Name, email, phone number, and
                address.
              </li>
              <li>
                <em>Payment Data</em>: Card details (processed securely by
                third-party providers).
              </li>
              <li>
                <em>Usage Data</em>: Booking history, preferences, and
                interactions with the platform.
              </li>
              <li>
                <em>Communication Data</em>: Messages exchanged with
                Professionals.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">3.2 For Professionals</h3>
            <ul className="list-disc pl-6">
              <li>
                <em>Identification Data</em>: Name, email, phone number, and
                address.
              </li>
              <li>
                <em>Professional Data</em>: Qualifications, DBS check,
                portfolio, insurance details.
              </li>
              <li>
                <em>Payment Data</em>: Bank account details for payouts.
              </li>
              <li>
                <em>Usage Data</em>: Booking history, client reviews, platform
                interactions.
              </li>
              <li>
                <em>Communication Data</em>: Messages exchanged with Clients.
              </li>
            </ul>
          </div>
        </section>

        {/* 4. How We Use Your Data */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            4. How We Use Your Data
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">4.1 For Clients</h3>
            <ul className="list-disc pl-6">
              <li>To create and manage your account.</li>
              <li>To process bookings and payments.</li>
              <li>To communicate about bookings, updates, and promotions.</li>
              <li>To improve our platform and services.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">4.2 For Professionals</h3>
            <ul className="list-disc pl-6">
              <li>To verify your credentials and eligibility.</li>
              <li>To facilitate bookings and payouts.</li>
              <li>
                To communicate about bookings, updates, and platform changes.
              </li>
              <li>To improve our platform and services.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">
              4.3 Legal Basis for Processing
            </h3>
            <ul className="list-disc pl-6">
              <li>
                <em>Contractual Necessity</em>: To fulfill bookings and provide
                services.
              </li>
              <li>
                <em>Legitimate Interests</em>: To improve our platform and
                prevent fraud.
              </li>
              <li>
                <em>Consent</em>: For marketing communications (you can opt out
                at any time).
              </li>
            </ul>
          </div>
        </section>

        {/* 5. Sharing Your Data */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">5. Sharing Your Data</h2>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">5.1 For Clients</h3>
            <ul className="list-disc pl-6">
              <li>
                <em>Professionals</em>: Only necessary information for bookings.
              </li>
              <li>
                <em>Payment Processors</em>: To securely process payments.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">5.2 For Professionals</h3>
            <ul className="list-disc pl-6">
              <li>
                <em>Clients</em>: Only necessary information to facilitate
                bookings.
              </li>
              <li>
                <em>Payment Processors</em>: To securely process payouts.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">
              5.3 Other Third Parties
            </h3>
            <ul className="list-disc pl-6">
              <li>
                <em>Service Providers</em>: For platform maintenance, analytics,
                and marketing.
              </li>
              <li>
                <em>Legal Authorities</em>: If required by law or to protect our
                rights.
              </li>
            </ul>
          </div>
        </section>

        {/* 6. Data Security */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
          <ul className="list-disc pl-6">
            <li>
              <em>Encryption</em>: For data in transit and at rest.
            </li>
            <li>
              <em>Access Controls</em>: To limit who can access your data.
            </li>
            <li>
              <em>Regular Audits</em>: To ensure compliance with security
              standards.
            </li>
          </ul>
        </section>

        {/* 7. Data Retention */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
          <p>We retain your data only as long as necessary:</p>
          <ul className="list-disc pl-6">
            <li>
              <em>Clients</em>: Until you delete your account or for
              legal/compliance purposes.
            </li>
            <li>
              <em>Professionals</em>: Until you delete your account or for
              legal/compliance purposes.
            </li>
          </ul>
          <p className="mt-4">
            After retention periods, data is securely deleted or anonymized.
          </p>
        </section>

        {/* 8. Your Rights */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">8. Your Rights</h2>
          <p>
            Under <em>UK GDPR</em>, you have the right to:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <em>Access</em>: Request a copy of your data.
            </li>
            <li>
              <em>Correct</em>: Update inaccurate or incomplete data.
            </li>
            <li>
              <em>Delete</em>: Request deletion of your data.
            </li>
            <li>
              <em>Restrict</em>: Limit how we use your data.
            </li>
            <li>
              <em>Object</em>: Opt out of marketing or certain processing
              activities.
            </li>
            <li>
              <em>Portability</em>: Request a transfer of your data to another
              service.
            </li>
          </ul>
          <p className="mt-4">
            To exercise these rights, contact us at <em>info@salonak.co.uk</em>.
          </p>
        </section>

        {/* 9. Cookies and Tracking */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            9. Cookies and Tracking
          </h2>
          <p>We use cookies to:</p>
          <ul className="list-disc pl-6">
            <li>Improve platform functionality.</li>
            <li>Analyze usage patterns.</li>
            <li>Personalize your experience.</li>
          </ul>
          <p className="mt-4">
            You can manage cookie preferences in your browser settings.
          </p>
        </section>

        {/* 10. Changes to This Policy */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            10. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy periodically. Significant changes
            will be notified <em>15 days in advance</em>. Continued use of
            SALONAK after changes constitutes acceptance.
          </p>
        </section>

        {/* 11. Contact Us */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
          <p>
            For questions or concerns about this Privacy Policy, contact us at:
          </p>
          <p>
            <em>Email</em>: support@salonak.co.uk
          </p>
        </section>
      </div>
    </div>
  );
}
