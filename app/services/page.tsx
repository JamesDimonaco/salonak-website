import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Scissors, Brush, Ruler, HandMetal, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our range of at-home beauty and grooming services.",
};

const services = [
  {
    title: "Haircuts & Styling",
    description:
      "From classic cuts to modern styles, our experts provide the perfect look.",
    details:
      "Our professional stylists bring years of experience right to your doorstep. Services include haircuts, styling, blow-drying, and hair treatments.",
    icon: Scissors,
  },
  {
    title: "Makeup Services",
    description:
      "Achieve flawless beauty for any event with our professional makeup artists.",
    details:
      "Whether it's for a wedding, special event, or photoshoot, our makeup artists create stunning looks tailored to your preferences.",
    icon: Brush,
  },
  {
    title: "Grooming Services",
    description:
      "Enjoy premium grooming, from beard trims to shaves, at your convenience.",
    details:
      "Expert grooming services including precision beard trims, hot towel shaves, and facial grooming treatments.",
    icon: Ruler,
  },
  {
    title: "Nail Care",
    description:
      "Pamper yourself with our indulgent manicure and pedicure services.",
    details:
      "Comprehensive nail care including manicures, pedicures, gel applications, and nail art by experienced technicians.",
    icon: HandMetal,
  },
  {
    title: "Eyelash Extensions",
    description: "Get stunning, long-lasting lashes tailored to your style.",
    details:
      "Professional eyelash extension services with various styles and lengths to choose from, applied with precision and care.",
    icon: Eye,
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>

      {/* Featured Services with Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.slice(0, 3).map((service, index) => {
          const Icon = service.icon;
          return (
            <Card
              key={index}
              className="transform transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold">{service.title}</h2>
                </div>
                <p className="mb-4 text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Detailed Service Information with Accordion */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Detailed Service Information
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="flex items-center gap-3">
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-primary" />
                    <span>{service.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                    <p>{service.details}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
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
