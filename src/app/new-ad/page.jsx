'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { motion, AnimatePresence } from 'motion/react';

import ProgressHeader from '@templates/new-ad/ProgressHeader/ProgressHeader';
import BottomActionBar from '@templates/new-ad/BottomActionBar/BottomActionBar';
import AdContent from '@templates/new-ad/Contents/AdContent';
import Channels from '@templates/new-ad/Contents/Channels';
import Budget from '@templates/new-ad/Contents/Budget';
import Review from '@templates/new-ad/Contents/Review';
import { allChannels } from '@/data';

const TOTAL_STEPS = 4;

export default function Page() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    text: '',
    link: '',
    ctaKey: 'view',
    customCta: '',
    channels: [],
    cpm: 0.3,
    budget: 0,
    schedule: 'now',
    scheduleDate: '',
  });

  const handleContinue = () => {
    if (step < TOTAL_STEPS) {
      setStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (step === 1) {
      router.push('/');
    } else {
      setStep((s) => s - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const steps = {
    1: <AdContent formData={formData} setFormData={setFormData} />,
    2: <Channels formData={formData} setFormData={setFormData} />,
    3: <Budget formData={formData} setFormData={setFormData} />,
    4: <Review formData={formData} channelsData={allChannels} />,
  };

  return (
    <div className='className="flex bg-ink font-body text-paper" min-h-screen flex-col'>
      <ProgressHeader onBack={handleBack} step={step} totalSteps={TOTAL_STEPS} />
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          >
            {steps[step]}
          </motion.div>
        </AnimatePresence>
        <BottomActionBar totalSteps={TOTAL_STEPS} onContinue={handleContinue} canContinue />
      </div>
    </div>
  );
}
