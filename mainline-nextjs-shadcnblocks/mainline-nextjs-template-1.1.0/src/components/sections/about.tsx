import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const About = () => {
  return (
    <section className="container mt-10 flex max-w-5xl flex-col-reverse gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:flex-row lg:items-end">
      {/* Images Left - Text Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <ImageSection
          images={[
            { src: '/about/1.webp', alt: 'Team collaboration' },
            { src: '/about/2.webp', alt: 'Team workspace' },
          ]}
          className="xl:-translate-x-10"
        />

        <TextSection
          title="Our team"
          paragraphs={[
            'Laks Luxury Detailing was founded in 2019 with a passion for automotive excellence. Every service has been designed from the ground up — with no shortcuts or compromises. We are purpose-built to deliver premium detailing services for the most discerning vehicle owners.',
            "We are 100% locally owned, family-operated, and we keep our team highly trained. Over time, we've perfected our techniques, but we're always focused on delivering exceptional results for our customers.",
            "If you're interested in joining our team of detailing professionals, check out our career opportunities below.",
          ]}
          ctaButton={{
            href: '/careers',
            text: 'View opportunities',
          }}
        />
      </div>

      {/* Text Left - Images Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <TextSection
          paragraphs={[
            "At Laks Luxury Detailing, we are dedicated to transforming the way vehicle owners care for their cars. Our mission is to provide our customers with an unbeatable edge over wear, damage, and aging through professional detailing services and premium protection products. We'll stop at nothing to give you the care your vehicle deserves.",
            "We're customer-obsessed — investing the time to understand every aspect of your vehicle's needs so that we can help you maintain it better than ever before. We're all in this together because your vehicle's success is our success. In our history as a company, we've never lost a customer, because when your vehicle looks amazing, so do we.",
          ]}
        />
        <ImageSection
          images={[
            { src: '/about/3.webp', alt: 'Modern workspace' },
            { src: '/about/4.webp', alt: 'Team collaboration' },
          ]}
          className="hidden lg:flex xl:translate-x-10"
        />
      </div>
    </section>
  );
};

export default About;

interface ImageSectionProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export function ImageSection({ images, className }: ImageSectionProps) {
  return (
    <div className={cn('flex flex-col gap-6', className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-[2/1.5] overflow-hidden rounded-2xl"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

interface TextSectionProps {
  title?: string;
  paragraphs: string[];
  ctaButton?: {
    href: string;
    text: string;
  };
}

export function TextSection({
  title,
  paragraphs,
  ctaButton,
}: TextSectionProps) {
  return (
    <div className="flex-1 space-y-4 text-lg font-medium md:space-y-6">
      {title && <h2 className="text-primary text-4xl font-medium">{title}</h2>}
      <div className="text-muted-foreground max-w-xl space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {ctaButton && (
        <div className="mt-8">
          <Link href={ctaButton.href}>
            <Button size="lg">{ctaButton.text}</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
