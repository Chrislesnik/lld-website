import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const categories = [
  {
    title: 'Payment & Services',
    questions: [
      {
        question: 'What form of payment is accepted?',
        answer:
          'We accept all major credit and debit cards, including Visa, Mastercard, American Express, and Discover. Mobile payments like Apple Pay, Google Pay, and Samsung Pay are also supported, along with Zelle for direct transfers.',
      },
      {
        question: 'What is Mobile Detailing?',
        answer:
          "Mobile detailing is a professional car cleaning service that comes to your location, offering full interior and exterior detailing without the need for you to visit a shop. It's convenient, thorough, and tailored to your needs.",
      },
      {
        question: 'How does Winterization work?',
        answer:
          'Winterization prepares your vehicle for harsh winter conditions by applying protective coatings, treating seals, and ensuring your car stays clean, safe, and well-maintained during colder months.',
      },
    ],
  },
  {
    title: 'Detailing Services',
    questions: [
      {
        question: 'What is Ceramic Coating?',
        answer:
          "Ceramic coating is a protective layer applied to your car's paint to shield it from dirt, water, and UV rays. It enhances your car's shine and reduces the need for frequent waxing.",
      },
      {
        question: 'What does the Maintenance Program consist of?',
        answer:
          "Our maintenance program offers regular detailing services on a set schedule to keep your car clean year-round while saving you money. It's perfect for those who want consistent upkeep without waiting for their vehicle to get dirty. Enjoy a cleaner car and lower costs compared to one-time detailing.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = 'h2',
  className,
}: {
  headerTag?: 'h1' | 'h2';
  className?: string;
}) => {
  // Flatten all questions into a single array
  const allQuestions = categories.flatMap((category) => category.questions);

  return (
    <section className={cn('py-28 lg:py-32', className)}>
      <div className="container max-w-4xl">
        <div className="mb-12 space-y-4 text-center">
          <p className="text-muted-foreground text-sm tracking-wide uppercase">
            STILL NOT SURE?
          </p>
          {headerTag === 'h1' ? (
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h1>
          ) : (
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
          )}
        </div>

        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {allQuestions.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border-border mb-2 rounded-lg"
              >
                <AccordionTrigger className="text-foreground px-6 py-4 font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-6 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <Button className="rounded-lg border-2 border-[#1E40AF] bg-[#1E40AF] px-10 py-4 text-lg font-bold text-white shadow-lg transition-all duration-200 hover:bg-[#1D4ED8] hover:shadow-xl">
            FREE CONSULTATION
          </Button>
        </div>
      </div>
    </section>
  );
};
