"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: false,
        }),
      ]}
      className="w-full max-w-6xl mx-auto"
    >
      <CarouselContent className="-ml-4">
        {images.map((image, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform hover:scale-105 duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-4 mt-8">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
