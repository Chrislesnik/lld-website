import React from 'react';

import Link from 'next/link';

import { Facebook, Linkedin, Twitter } from 'lucide-react';

import { DashedLine } from '../dashed-line';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
  {
    title: 'Service Area',
    content: (
      <p className="text-muted-foreground mt-3">
        Mobile Detailing Service
        <br />
        Serving Greater Metro Area
        <br />
        We come to you!
      </p>
    ),
  },
  {
    title: 'Contact Us',
    content: (
      <div className="mt-3">
        <div>
          <p className="">Bookings & Inquiries</p>
          <Link
            href="mailto:bookings@laksluxurydetailing.com"
            className="text-muted-foreground hover:text-foreground"
          >
            bookings@laksluxurydetailing.com
          </Link>
        </div>
        <div className="mt-1">
          <p className="">Phone</p>
          <Link
            href="tel:+1234567890"
            className="text-muted-foreground hover:text-foreground"
          >
            (123) 456-7890
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: 'Follow us',
    content: (
      <div className="mt-3 flex gap-6 lg:gap-10">
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          <Facebook className="size-5" />
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          <Twitter className="size-5" />
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          <Linkedin className="size-5" />
        </Link>
      </div>
    ),
  },
];

export default function Contact() {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-2xl">
        <h1 className="text-center text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          Contact us
        </h1>
        <p className="text-muted-foreground mt-4 text-center leading-snug font-medium lg:mx-auto">
          Ready to give your vehicle the luxury treatment it deserves? Get in
          touch with us today.
        </p>

        {/* Inquiry Form */}
        <div className="mx-auto mt-10 md:mt-14 lg:mt-20">
          <h2 className="text-lg font-semibold">Service Request</h2>
          <form className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label>Full name</Label>
              <Input placeholder="First and last name" />
            </div>
            <div className="space-y-2">
              <Label>Email address</Label>
              <Input placeholder="your.email@example.com" type="email" />
            </div>
            <div className="space-y-2">
              <Label>
                Vehicle details{' '}
                <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Input placeholder="Year, Make, Model" />
            </div>
            <div className="space-y-2">
              <Label>
                Service location{' '}
                <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Input placeholder="Your address or preferred location" />
            </div>
            <div className="space-y-2">
              <Label>Service details</Label>
              <Textarea
                placeholder="Tell us about the services you're interested in (ceramic coating, paint correction, interior detailing, etc.)"
                className="min-h-[120px] resize-none"
              />
            </div>

            <div className="flex justify-end">
              <Button size="lg" type="submit" className="">
                Request Quote
              </Button>
            </div>
          </form>
        </div>

        <DashedLine className="my-12" />

        <div className="flex justify-between gap-8 max-sm:flex-col lg:gap-12">
          {contactInfo.map((info, index) => (
            <div key={index}>
              <h2 className="font-medium">{info.title}</h2>
              {info.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
