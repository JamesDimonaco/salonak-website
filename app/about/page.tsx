import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SALONAK and our mission to bring professional beauty and grooming services to your home.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About SALONAK</h1>
      <div className="prose prose-lg max-w-none mb-12">
        <p>
          Welcome to SALONAK, your trusted platform for at-home grooming and
          beauty services. Our mission is to bring professional salon
          experiences right to your doorstep, with skilled experts ready to
          cater to your needs.
        </p>
        <h2>Our Story</h2>
        <p>
          Founded with the vision of making high-quality beauty and grooming
          services accessible and convenient, SALONAK has grown to become a
          trusted name in the industry. Our commitment to excellence and
          customer satisfaction drives everything we do.
        </p>
      </div>
      <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Quality",
            description:
              "We are committed to delivering excellence in every service.",
          },
          {
            title: "Safety",
            description:
              "Your safety is our priority. Our professionals are thoroughly vetted.",
          },
          {
            title: "Customer Satisfaction",
            description:
              "We strive to exceed your expectations with every visit.",
          },
        ].map((value, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p>{value.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
