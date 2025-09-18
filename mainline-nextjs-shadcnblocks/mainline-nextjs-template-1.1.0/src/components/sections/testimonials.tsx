import Image from 'next/image';

import { ArrowRight } from 'lucide-react';

import { DashedLine } from '../dashed-line';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const items = [
  {
    quote: "Absolutely incredible service! My Tesla Model S has never looked better. The attention to detail is unmatched, and the convenience of mobile service is perfect for my busy schedule.",
    author: 'Michael Chen',
    role: 'Tesla Model S Owner',
    avatar: 'M',
    avatarColor: 'bg-blue-500',
  },
  {
    quote: "The ceramic coating service exceeded all expectations. My Porsche 911 looks showroom fresh even after months. Professional, reliable, and worth every penny!",
    author: 'Sarah Johnson',
    role: 'Porsche 911 Owner',
    avatar: 'S',
    avatarColor: 'bg-orange-500',
  },
  {
    quote: "Outstanding work on my BMW M5! The team arrived on time, worked efficiently, and the results speak for themselves. I'll definitely be booking regular services.",
    author: 'David Rodriguez',
    role: 'BMW M5 Owner',
    avatar: 'D',
    avatarColor: 'bg-purple-500',
  },
  {
    quote: "Premium service that exceeded my expectations! The mobile convenience is a game changer, and the results are consistently exceptional. Highly recommended!",
    author: 'Amanda Foster',
    role: 'Audi RS6 Owner',
    avatar: 'A',
    avatarColor: 'bg-green-500',
  },
  {
    quote: "Absolutely incredible service! My Tesla Model S has never looked better. The attention to detail is unmatched, and the convenience of mobile service is perfect for my busy schedule.",
    author: 'Michael Chen',
    role: 'Tesla Model S Owner',
    avatar: 'M',
    avatarColor: 'bg-blue-500',
  },
  {
    quote: "The ceramic coating service exceeded all expectations. My Porsche 911 looks showroom fresh even after months. Professional, reliable, and worth every penny!",
    author: 'Sarah Johnson',
    role: 'Porsche 911 Owner',
    avatar: 'S',
    avatarColor: 'bg-orange-500',
  },
];

export const Testimonials = ({
  className,
  dashedLineClassName,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  return (
    <>
      <section className={cn('py-28 lg:py-32', className)}>
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-md leading-snug font-medium">
              Discover why luxury car owners trust us with their most prized
              possessions. We deliver exceptional results with every service.
            </p>
            <Button variant="outline" className="shadow-md">
              View More Reviews <ArrowRight className="size-4" />
            </Button>
          </div>

          <div className="mt-8 md:mt-12 lg:mt-20">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {items.map((testimonial, index) => (
                <Card key={index} className="bg-background border-border min-w-[300px] flex-shrink-0 shadow-lg">
                  <CardContent className="p-6">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">★</span>
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-foreground text-sm leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    {/* Author Info */}
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${testimonial.avatarColor} flex items-center justify-center text-white font-semibold`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="text-foreground font-semibold text-sm">
                          {testimonial.author}
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Scroll indicator */}
            <div className="text-center mt-6">
              <p className="text-muted-foreground text-sm">
                Scroll horizontally to read more testimonials →
              </p>
            </div>
          </div>
        </div>
      </section>
      <DashedLine
        orientation="horizontal"
        className={cn('mx-auto max-w-[80%]', dashedLineClassName)}
      />
    </>
  );
};
