import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Clock,
  DollarSign,
  HeartHandshake,
  Scissors,
  Brush,
  Ruler,
  Eye,
  ClipboardList,
  UserCircle,
  Calendar,
} from "lucide-react";
import { GiFingernail } from "react-icons/gi";

export const metadata: Metadata = {
  title: "For Professionals",
  description:
    "Join SALONAK and elevate your career as a beauty or grooming professional.",
};

const benefits = [
  {
    title: "Flexibility",
    description: "Set your own schedule and work at your convenience.",
    icon: Clock,
  },
  {
    title: "Earnings",
    description:
      "Earn competitively with 70% of service fees going directly to you.",
    icon: DollarSign,
  },
  {
    title: "Support",
    description: "Receive ongoing support and resources to help you succeed.",
    icon: HeartHandshake,
  },
];

const serviceTypes = [
  { name: "Hair Stylists", icon: Scissors },
  { name: "Makeup Artists", icon: Brush },
  { name: "Nail Technicians", icon: GiFingernail },
  { name: "Grooming Experts", icon: Ruler },
  { name: "Eyelash Technicians", icon: Eye },
];

const registrationSteps = [
  { step: "Provide the required documents", icon: ClipboardList },
  { step: "Complete your profile", icon: UserCircle },
  { step: "Start accepting bookings", icon: Calendar },
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
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                </div>
                <p>{benefit.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <h2 className="text-3xl font-bold mb-8 text-center">Service Types</h2>
      <ul className="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
        {serviceTypes.map((service, index) => {
          const Icon = service.icon;
          return (
            <li key={index} className="flex items-center gap-3 p-2">
              <Icon className="w-5 h-5" />
              <span className="text-lg">{service.name}</span>
            </li>
          );
        })}
      </ul>
      <h2 className="text-3xl font-bold mb-8 text-center">
        Registration Process
      </h2>
      <div className="max-w-2xl mx-auto mb-12">
        {registrationSteps.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center gap-4 mb-4">
              <div className="bg-muted p-2 rounded-full">
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-lg">
                {index + 1}) {item.step}
              </p>
            </div>
          );
        })}
      </div>
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
