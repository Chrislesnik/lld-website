import CreamContainer from '@/components/layout/cream-container';
import { FAQ } from '@/components/sections/faq';
import Hero from '@/components/sections/hero';
import Logos from '@/components/sections/logos';
import { Pricing } from '@/components/sections/pricing';
import { Testimonials } from '@/components/sections/testimonials';

export default function Home() {
  return (
    <>
      <CreamContainer className="via-muted to-muted/80">
        <Hero />
        <Logos />
      </CreamContainer>
      <Testimonials />
      <CreamContainer variant="bottom">
        <Pricing />
        <FAQ />
      </CreamContainer>
    </>
  );
}
