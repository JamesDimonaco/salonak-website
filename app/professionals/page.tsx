import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "For Professionals",
  description:
    "Join SALONAK and elevate your career as a beauty or grooming professional.",
};

const benefits = [
  {
    title: "Flexibility",
    description: "Set your own schedule and work at your convenience.",
  },
  {
    title: "Earnings",
    description:
      "Earn competitively with 70% of service fees going directly to you.",
  },
  {
    title: "Support",
    description: "Receive ongoing support and resources to help you succeed.",
  },
];

const serviceTypes = [
  "Hair Stylists",
  "Makeup Artists",
  "Nail Technicians",
  "Grooming Experts",
  "Eyelash Technicians",
];

export default function ProfessionalsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Join SALONAK as a Professional
      </h1>
      <p className="text-lg text-center mb-12">
        Elevate your career by connecting with clients seeking top-notch at-home
        services.
      </p>
      <h2 className="text-3xl font-bold mb-8 text-center">Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {benefits.map((benefit, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <h2 className="text-3xl font-bold mb-8 text-center">Service Types</h2>
      <ul className="list-disc list-inside text-lg mb-12 max-w-md mx-auto">
        {serviceTypes.map((service, index) => (
          <li key={index} className="mb-2">
            {service}
          </li>
        ))}
      </ul>
      <h2 className="text-3xl font-bold mb-8 text-center">
        Registration Process
      </h2>
      <p className="text-lg text-left md:text-center mb-8 pl-4">
        Join us in three simple steps:
        <br />
        1) Provide the required documents
        <br />
        2) Complete your profile
        <br />
        3) Start accepting bookings
      </p>
      <div className="text-center mb-12">
        <Button size="lg">Join Now</Button>
      </div>
      <div className="bg-muted p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-4 text-center">Testimonial</h3>
        <p className="text-lg italic text-center">
          &quot;SALONAK has given me the freedom to manage my time and grow my
          client base.&quot; - Alex T.
        </p>
      </div>
    </div>
  );
}
