import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our range of at-home beauty and grooming services.",
};

const services = [
  {
    title: "Haircuts & Styling",
    description:
      "From classic cuts to modern styles, our experts provide the perfect look.",
  },
  {
    title: "Makeup Services",
    description:
      "Achieve flawless beauty for any event with our professional makeup artists.",
  },
  {
    title: "Grooming Services",
    description:
      "Enjoy premium grooming, from beard trims to shaves, at your convenience.",
  },
  {
    title: "Nail Care",
    description:
      "Pamper yourself with our indulgent manicure and pedicure services.",
  },
  {
    title: "Eyelash Extensions",
    description: "Get stunning, long-lasting lashes tailored to your style.",
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="mb-4">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-lg mb-4">
          Each service is tailored to your preferences. Transparent pricing and
          durations are displayed for your convenience.
        </p>
        <p className="text-lg">
          Easily book a service through our app. Provide any special
          instructions to ensure the best experience.
        </p>
      </div>
    </div>
  );
}
