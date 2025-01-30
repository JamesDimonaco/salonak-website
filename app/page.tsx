import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { testimonials } from "@/content/testimonials";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="/images/hero.jpg"
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
              },
              {
                title: "Quality",
                description:
                  "Access top-rated professionals at your convenience.",
              },
              {
                title: "Flexibility",
                description: "Choose appointment times that fit your schedule.",
              },
              {
                title: "Safety",
                description:
                  "All professionals are thoroughly vetted for your peace of mind.",
              },
            ].map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p>{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
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
              },
              {
                title: "Makeup Services",
                description:
                  "Look your best for any occasion with our expert makeup artists.",
              },
              {
                title: "Grooming Services",
                description:
                  "Experience premium grooming, including beard trims and shaves.",
              },
              {
                title: "Nail Care",
                description:
                  "Indulge in luxurious manicure and pedicure services.",
              },
              {
                title: "Eyelash Extensions",
                description:
                  "Enhance your beauty with long-lasting, professional lash extensions.",
              },
            ].map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            ))}
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
      <section id="download" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get Started with SALONAK</h2>
          <div className="flex justify-center space-x-4">
            <Button asChild size="lg">
              <Link href="https://play.google.com/store/apps/details?id=com.salonak">
                Download on Google Play
              </Link>
            </Button>
            <Button asChild size="lg">
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
