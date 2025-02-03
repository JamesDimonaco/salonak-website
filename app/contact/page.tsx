import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/contact-form";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/siteConfig";
import {
  Mail,
  MessageCircle,
  Share2,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SALONAK for inquiries or support.",
};

const socialIcons = {
  Facebook: Facebook,
  Twitter: Twitter,
  Instagram: Instagram,
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="w-6 h-6" />
            <p className="text-lg">
              Have questions or need assistance? We&apos;re here to help!
            </p>
          </div>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <p>
                <strong>Email:</strong> support@salonak.co.uk
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <Share2 className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Stay Connected</h2>
          </div>
          <p className="mb-4">
            Follow us on social media for updates and promotions:
          </p>
          <div className="flex space-x-4">
            {siteConfig.socialMedia.map((social) => {
              const Icon =
                socialIcons[social.name as keyof typeof socialIcons] || Share2;
              return (
                <Button
                  key={social.name}
                  variant="outline"
                  asChild
                  className="gap-2"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-4 h-4" />
                    {social.name}
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
