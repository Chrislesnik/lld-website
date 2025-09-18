'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ArrowUpRight } from 'lucide-react';

import { BookingModal } from '@/components/ui/booking-modal';
import { Button } from '@/components/ui/button';

export function Footer() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Ceramic Coating', href: '/#ceramic-coating' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Merchandise', href: '/merchandise' },
    { name: 'Contact', href: '/contact' },
  ];

  const social = [
    { name: 'Xwitter', href: '#' },
    { name: 'LinkedIn', href: '#' },
  ];

  const legal = [{ name: 'Privacy Policy', href: '/privacy' }];

  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          Book Your Detail Now!
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug font-medium text-balance">
          Experience the finest mobile car detailing service. We bring
          professional-grade equipment and premium products directly to your
          location.
        </p>
        <div>
          <Button
            size="lg"
            className="mt-4"
            onClick={() => setIsBookingModalOpen(true)}
          >
            Book Service
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Image
        src="/footer.svg"
        alt="Laks Luxury Detailing"
        width={1570}
        height={375}
        className="mt-10 md:mt-14 lg:mt-20"
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </footer>
  );
}
