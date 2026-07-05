import Hero from '@templates/Hero/Hero';
import TrustBar from '@templates/TrustBar/TrusBar';
import HowItWorks from '@templates/HowItWorks/HowItWorks';
import Features from '@templates/Features/Features';
import Channels from '@templates/Channels/Channels';
import Pricing from '@templates/Pricing/Pricing';
import FAQ from '@templates/Faq/Faq';
import CTA from '@templates/CTA/CTA';

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
