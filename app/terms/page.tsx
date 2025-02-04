import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for SALONAK services.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-sm text-gray-600">Last Updated: 01/01/2025</p>

        {/* 1. Introduction */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">1.1 Welcome to SALONAK</h3>
            <p>
              SALONAK is a booking platform connecting clients with professional
              beauty and grooming experts for at-home services. These Terms and
              Conditions (&ldquo;Terms&rdquo;) govern your use of our platform,
              whether you are a <em>Client</em> or <em>Professional</em>, and
              outline your rights and obligations.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">
              1.2 Acceptance of Terms
            </h3>
            <p>
              By creating an account and using SALONAK, you agree to comply with
              these Terms. You acknowledge acceptance by ticking &quot;I accept
              the terms and conditions&quot; during registration. If you
              disagree, you must not use SALONAK.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">1.3 Role of SALONAK</h3>
            <p>SALONAK acts solely as an intermediary platform. We do not:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide the actual services (for Clients).</li>
              <li>Guarantee business growth or profit (for Professionals).</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">1.4 Updates to Terms</h3>
            <p>
              We may update these Terms periodically. Significant changes will
              be notified <em>15 days in advance</em>; minor updates will be
              posted on the platform. Continued use after updates constitutes
              acceptance.
            </p>
          </div>
        </section>

        {/* 2. Services and Scope */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">2. Services and Scope</h2>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">2.1 Platform Services</h3>
            <ul className="list-disc pl-6">
              <li>
                <em>Clients</em>: Book skilled hair and beauty professionals
                (barbers, hairdressers, makeup artists, etc.) for at-home
                services.
              </li>
              <li>
                <em>Professionals</em>: Connect with clients seeking services.
              </li>
              <li>
                Services are available <em>only within the UK</em>.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">
              2.2 Quality and Dispute Resolution
            </h3>
            <ul className="list-disc pl-6">
              <li>
                <em>Clients and Professionals</em> must first attempt to resolve
                disputes directly. SALONAK may mediate but is{" "}
                <em>not liable</em> for outcomes.
              </li>
              <li>
                Disputes unresolved after 30 days may escalate to arbitration.
              </li>
            </ul>
          </div>
        </section>

        {/* 3. Registration and Eligibility */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. Registration and Eligibility
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">3.1 For Clients</h3>
            <ul className="list-disc pl-6">
              <li>
                Must be <em>18+ years old</em> and provide accurate information.
              </li>
              <li>
                Ensure a <em>safe, clean environment</em> for professionals
                during services.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">3.2 For Professionals</h3>
            <ul className="list-disc pl-6">
              <li>
                Provide <em>valid credentials</em>: DBS check, qualifications,
                portfolio, and public liability/professional indemnity
                insurance.
              </li>
              <li>
                Must be <em>eligible to work</em> in the UK (self-employed
                status).
              </li>
              <li>Maintain updated credentials and insurance.</li>
            </ul>
          </div>
        </section>

        {/* 4. Payments and Fees */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">4. Payments and Fees</h2>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">4.1 Pricing</h3>
            <ul className="list-disc pl-6">
              <li>
                Service fees are set by SALONAK in <em>GBP (£)</em>.
              </li>
              <li>
                <em>Professionals receive 70%</em> of the service fee + tips;
                SALONAK retains <em>30%</em> as a platform fee.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">4.2 Payment Processing</h3>
            <p>
              Payments are securely processed by third-party providers. SALONAK
              is not liable for provider delays/issues.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">
              4.3 Taxation (Professionals)
            </h3>
            <p>
              Professionals are responsible for{" "}
              <em>reporting income and paying taxes</em> in the UK.
            </p>
          </div>
        </section>

        {/* 5. Cancellations */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">5. Cancellations</h2>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">
              5.1 Client Cancellations
            </h3>
            <p>
              <em>Fees apply based on timing</em>:
            </p>
            <ul className="list-none pl-6 space-y-2">
              <li>• &gt;24 hours: No fee</li>
              <li>• 10–24 hours: £5</li>
              <li>• 2–5 hours: 50% of booking (up to £25)</li>
              <li>• &lt;2 hours: 70% of booking (up to £35)</li>
              <li>• No-show: 100% (up to £50)</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">
              5.2 Professional Cancellations
            </h3>
            <p>
              Repeated cancellations may result in <em>account suspension</em>.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">5.3 Force Majeure</h3>
            <p>
              Emergencies (e.g., illness, extreme weather) allow penalty-free
              rescheduling/cancellation.
            </p>
          </div>
        </section>

        {/* 6. Conduct and Prohibited Activities */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            6. Conduct and Prohibited Activities
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">6.1 For Clients</h3>
            <p>
              Prohibited: Harassment, unsafe environments, or booking services
              outside SALONAK.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">6.2 For Professionals</h3>
            <p>
              Prohibited: Bypassing SALONAK to solicit clients, discrimination,
              or false advertising.
            </p>
          </div>
        </section>

        {/* 7. Intellectual Property */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            7. Intellectual Property
          </h2>
          <ul className="list-disc pl-6">
            <li>
              SALONAK owns all platform content (text, graphics, software).
            </li>
            <li>
              <em>
                User Content: Clients/Professionals grant SALONAK a
                non-exclusive license
              </em>{" "}
              to use content posted on profiles.
            </li>
          </ul>
        </section>

        {/* 8. Liability and Indemnification */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            8. Liability and Indemnification
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">
              8.1 Limitation of Liability
            </h3>
            <ul className="list-disc pl-6">
              <li>
                SALONAK is <em>not liable</em> for services provided by
                Professionals.
              </li>
              <li>
                Liability is capped at the <em>amount paid for the service</em>.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">8.2 Indemnification</h3>
            <p>
              Users agree to indemnify SALONAK against claims arising from their
              breach of these Terms.
            </p>
          </div>
        </section>

        {/* 9. Governing Law */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
          <p>
            These Terms are governed by the laws of <em>England and Wales</em>.
          </p>
        </section>

        {/* 10. Data Privacy */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">10. Data Privacy</h2>
          <ul className="list-disc pl-6">
            <li>
              Compliant with <em>UK GDPR</em>.
            </li>
            <li>
              Data is used for account management, service improvement, and
              legal compliance.
            </li>
            <li>
              Users may <em>access, correct, or delete</em> their data.
            </li>
          </ul>
        </section>

        {/* 11. Contact Us */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
          <p>For questions or disputes:</p>
          <p>
            <em>Email</em>: support@salonak.co.uk
          </p>
        </section>
      </div>
    </div>
  );
}
