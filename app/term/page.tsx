import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for SALONAK services.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
      <div className="prose prose-lg max-w-none">
        <p>
          Welcome to SALONAK. By using our services, you agree to comply with
          and be bound by the following terms and conditions. Please read these
          carefully.
        </p>
        {/* Add more terms and conditions content here */}
      </div>
    </div>
  );
}
