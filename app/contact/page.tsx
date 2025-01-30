import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/contact-form";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/siteConfig";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SALONAK for inquiries or support.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-6">
            Have questions or need assistance? We&apos;re here to help!
          </p>
          <div className="space-y-4 mb-8">
            <p>
              <strong>Email:</strong> support@salonak.co.uk
            </p>
          </div>
          <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
          <p className="mb-4">
            Follow us on social media for updates and promotions:
          </p>
          <div className="flex space-x-4">
            {siteConfig.socialMedia.map((social) => (
              <Button key={social.name} variant="outline" asChild>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.name}
                </a>
              </Button>
            ))}
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
