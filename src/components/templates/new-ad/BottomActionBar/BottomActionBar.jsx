import { ArrowLeft, Wallet2 } from 'lucide-react';

function BottomActionBar({ step, totalSteps, canContinue, onContinue }) {
  const isLast = step === totalSteps;

  return (
    <div className="bg-ink/95 sticky bottom-0 z-40 border-t border-white/10 backdrop-blur-md">
      <div className="mx-auto max-w-2xl px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-8">
        <button
          onClick={onContinue}
          disabled={!canContinue}
          className="bg-gold-500 text-ink shadow-button-primary enabled:hover:bg-gold-400 flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-bold transition-all duration-160 ease-out enabled:active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isLast ? (
            <>
              پرداخت با TON
              <Wallet2 className="h-4 w-4 shrink-0" />
            </>
          ) : (
            <>
              ادامه
              <ArrowLeft className="h-4 w-4 shrink-0" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default BottomActionBar;
