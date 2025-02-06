import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { testimonials } from "@/content/testimonials";
import {
  Scissors,
  Brush,
  Ruler,
  HandMetal,
  Eye,
  Clock,
  Award,
  Calendar,
  Shield,
} from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="/hero.webp"
          alt="SALONAK - At-home beauty and grooming services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Transform Your Home into a Beauty & Grooming Haven
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Professional services at your doorstep
            </p>
            <Button asChild size="lg">
              <Link href="#download">Download the App</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Benefits of the SALONAK App
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Convenience",
                description:
                  "Book professional grooming and beauty services with just a few taps.",
                icon: Clock,
              },
              {
                title: "Quality",
                description:
                  "Access top-rated professionals at your convenience.",
                icon: Award,
              },
              {
                title: "Flexibility",
                description: "Choose appointment times that fit your schedule.",
                icon: Calendar,
              },
              {
                title: "Safety",
                description:
                  "All professionals are thoroughly vetted for your peace of mind.",
                icon: Shield,
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group relative p-6 bg-background rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg -z-10"></div>
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Haircuts & Styling",
                description:
                  "Professional haircuts and styling at your convenience.",
                icon: Scissors,
              },
              {
                title: "Makeup Services",
                description:
                  "Look your best for any occasion with our expert makeup artists.",
                icon: Brush,
              },
              {
                title: "Grooming Services",
                description:
                  "Experience premium grooming, including beard trims and shaves.",
                icon: Ruler,
              },
              {
                title: "Nail Care",
                description:
                  "Indulge in luxurious manicure and pedicure services.",
                icon: HandMetal,
              },
              {
                title: "Eyelash Extensions",
                description:
                  "Enhance your beauty with long-lasting, professional lash extensions.",
                icon: Eye,
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-background p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-150"></div>
                  <div className="relative">
                    <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3 text-primary ring-4 ring-primary/10">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-bold mb-8">Get Started with SALONAK</h2>
          <div className="flex flex-col gap-4 md:flex-row justify-center w-full max-w-xl mx-auto">
            <Button
              asChild
              size="lg"
              className="w-full md:w-auto bg-primary hover:bg-primary/90"
            >
              <Link href="https://play.google.com/store/apps/details?id=com.salonak">
                Download on Google Play
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full md:w-auto border-primary text-primary hover:bg-primary/10"
            >
              <Link href="https://apps.apple.com/app/salonak/id123456789">
                Download on the App Store
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
