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
        <p>
          At SALONAK, we are committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, and safeguard your personal
          information.
        </p>
        <h2>Data Collection</h2>
        <p>
          We collect identification, payment, usage, and profile information, as
          well as communication data.
        </p>
        <h2>Data Usage</h2>
        <p>
          We use data for account management, service improvement,
          communication, and legal compliance.
        </p>
        <h2>Data Sharing</h2>
        <p>
          We may share data with service providers, professionals (only
          necessary information), and legal authorities when required.
        </p>
        {/* Add more privacy policy content here */}
      </div>
    </div>
  );
}
