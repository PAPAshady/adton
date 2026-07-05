import Hero from '@/components/templates/landing/Hero/Hero';
import TrustBar from '@/components/templates/landing/TrustBar/TrusBar';
import HowItWorks from '@/components/templates/landing/HowItWorks/HowItWorks';
import Features from '@/components/templates/landing/Features/Features';
import Channels from '@/components/templates/landing/Channels/Channels';
import Pricing from '@/components/templates/landing/Pricing/Pricing';
import FAQ from '@/components/templates/landing/Faq/Faq';
import CTA from '@/components/templates/landing/CTA/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Features />
      <Channels />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
