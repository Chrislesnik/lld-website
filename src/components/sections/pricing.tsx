'use client';

import { useState } from 'react';

import { Check } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Basic Detail',
    monthlyPrice: '$150',
    yearlyPrice: '$150',
    description: 'Essential cleaning service',
    features: [
      'Exterior wash & dry',
      'Interior vacuum & wipe down',
      'Tire & wheel cleaning',
      'Window cleaning',
    ],
  },
  {
    name: 'Premium Detail',
    monthlyPrice: '$300',
    yearlyPrice: '$300',
    features: [
      'All basic detail features and...',
      'Paint correction',
      'Ceramic coating application',
      'Leather conditioning',
      'Engine bay cleaning',
      'Paint protection',
    ],
  },
  {
    name: 'Luxury Detail',
    monthlyPrice: '$500',
    yearlyPrice: '$500',
    features: [
      'All premium detail features and...',
      'Multi-layer ceramic coating',
      'Paint correction & polishing',
      'Interior deep cleaning',
      'Paint protection film',
      'Premium wax application',
    ],
  },
];

export const Pricing = ({ className }: { className?: string }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className={cn('py-28 lg:py-32', className)}>
      <div className="container max-w-5xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Pricing
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug font-medium text-balance">
            Choose the perfect detailing package for your luxury vehicle. All
            services include mobile convenience and professional-grade products
            for exceptional results.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-5 text-start md:mt-12 md:grid-cols-3 lg:mt-20">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`${
                plan.name === 'Premium Detail'
                  ? 'outline-primary origin-top outline-4'
                  : ''
              }`}
            >
              <CardContent className="flex flex-col gap-7 px-6 py-5">
                <div className="space-y-2">
                  <h3 className="text-primary font-semibold">{plan.name}</h3>
                  <div className="space-y-1">
                    <div className="text-muted-foreground text-lg font-medium">
                      {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}{' '}
                      {plan.name !== 'Basic Detail' && (
                        <span className="text-muted-foreground">
                          per service
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {plan.name !== 'Basic Detail' ? (
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={isAnnual}
                      onCheckedChange={() => setIsAnnual(!isAnnual)}
                    />
                    <span className="text-sm font-medium">
                      Package deals available
                    </span>
                  </div>
                ) : (
                  <span className="text-muted-foreground text-sm">
                    {plan.description}
                  </span>
                )}

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-muted-foreground flex items-center gap-1.5"
                    >
                      <Check className="size-5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-fit"
                  variant={
                    plan.name === 'Premium Detail' ? 'default' : 'outline'
                  }
                >
                  Book Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
