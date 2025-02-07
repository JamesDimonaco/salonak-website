import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { testimonials } from "@/content/testimonials";
import {
  Scissors,
  Brush,
  Ruler,
  Eye,
  Clock,
  Award,
  Calendar,
  Shield,
} from "lucide-react";
import { GiFingernail } from "react-icons/gi";

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
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Benefits of the SALONAK App
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary/10 rounded-full scale-150 blur-xl transition-transform group-hover:scale-175"></div>
                    <div className="relative bg-background rounded-full p-4 shadow-sm">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-xs">
                    {benefit.description}
                  </p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
                icon: GiFingernail,
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
                <div key={index} className="group relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/10 rounded-full scale-150 blur-lg transition-transform group-hover:scale-175"></div>
                      <div className="relative p-3 bg-background rounded-full">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground pl-16">
                    {service.description}
                  </p>
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
