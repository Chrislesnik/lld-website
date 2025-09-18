'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {
  ArrowRight,
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from 'lucide-react';

import { DashedLine } from '../dashed-line';

import { BookingModal } from '@/components/ui/booking-modal';
import { Button } from '@/components/ui/button';

const features = [
  {
    title: 'Ceramic Coating',
    description:
      'Premium ceramic coating for long-lasting protection and shine.',
    icon: CircleDot,
  },
  {
    title: 'Paint Correction',
    description:
      "Professional paint correction to restore your vehicle's finish.",
    icon: Blend,
  },
  {
    title: 'Interior Detailing',
    description: 'Complete interior cleaning and protection services.',
    icon: Diamond,
  },
  {
    title: 'Luxury Care',
    description: 'Premium detailing services for luxury and exotic vehicles.',
    icon: ChartNoAxesColumn,
  },
];

export default function Hero() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl md:whitespace-nowrap lg:text-6xl">
            Luxury Detailing for Your Vehicle.
          </h1>

          <p className="text-muted-foreground mt-5 font-sans text-2xl font-medium md:text-3xl lg:text-4xl">
            Laks Luxury Detailing provides premium mobile detailing services with
            professional care and attention to detail.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button onClick={() => setIsBookingModalOpen(true)}>
              Book Service
            </Button>
            <Link href="#">
              <Button
                variant="outline"
                className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              >
                <span className="max-w-56 truncate text-start md:max-w-none">
                  Premium Detailing Services Available
                </span>
                <ArrowRight className="stroke-3" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:ps-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-inter font-semibold">{feature.title}</h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24">
        <div className="relative h-[793px] w-full">
          <Image
            src="/LLD-image-1.png"
            alt="hero"
            fill
            className="rounded-3xl object-cover object-left-top shadow-lg max-lg:rounded-tr-none"
          />
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
}
