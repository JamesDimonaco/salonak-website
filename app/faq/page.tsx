import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently Asked Questions about SALONAK services.",
};

const faqs = [
  {
    question: "How do I download the SALONAK app?",
    answer:
      "You can download the SALONAK app from the App Store or Google Play. Simply search for 'SALONAK,' download the app, and follow the easy registration steps.",
  },
  {
    question: "How do I book a service?",
    answer:
      "Open the SALONAK app, select the service you need, choose a professional, and pick a time that suits you. Confirm your booking, and you're all set!",
  },
  {
    question: "Are your professionals vetted?",
    answer:
      "Yes, all our professionals go through a rigorous vetting process to ensure they meet our high standards for quality and safety.",
  },
  {
    question: "What should I do if I need to cancel a booking?",
    answer:
      "You can cancel your booking through the app. Please refer to our cancellation policy for any applicable fees.",
  },
  {
    question: "How can I join SALONAK as a professional?",
    answer:
      "Visit our 'Professionals' page, follow the registration steps, and submit the required documents. Once approved, you'll be ready to start accepting bookings.",
  },
  {
    question: "How can I delete my account?",
    answer: (
      <>
        To delete your account, please fill out our{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScQ2b7FRUkI8sFf3JTeleI24H-SypMNN5h5m7n_pFtUIxaerg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          account deletion request form
        </a>
        . Once submitted, your account and all associated data will be
        permanently deleted within 90 days. For further assistance, contact
        support@salonak.co.uk.
      </>
    ),
  },
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Frequently Asked Questions
      </h1>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            type="single"
            collapsible
            className="w-full max-w-3xl mx-auto"
          >
            <AccordionItem value={`item-${index}`} className="p-2 ">
              <AccordionTrigger className="text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
