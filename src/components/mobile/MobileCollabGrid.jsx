import React from 'react';
import iitPatnaLogo from '../../assets/icons/iit_patna.png';

export const MobileCollabGrid = () => {
  const brands = [
    {
      name: "NVIDIA",
      svg: (
        <svg className="h-4.5 w-auto fill-current" viewBox="0 0 100 24">
          <path d="M14.6 4.6c-4.4 0-8 3.6-8 8s3.6 8 8 8c3.2 0 6-1.9 7.3-4.7-.6-.3-1.6-.7-2.3-1-1 2.2-3.1 3.7-5 3.7-3.3 0-6-2.7-6-6s2.7-6 6-6c1.6 0 3.3 1 4.2 2.4l2-1.5c-1.4-1.9-3.7-2.9-6.2-2.9zm13 15.1h2.5V8.5h-2.5v11.2zm8.7 0h2.5V13c0-1.8.8-2.6 2.2-2.6 1.3 0 1.9.7 1.9 2.3v7h2.5V12.4c0-2.8-1.4-4.1-3.6-4.1-1.6 0-2.8.8-3.3 2.1h-.1V8.5h-2.1v11.2zm17.2-11.2l-2.4 7.6-2.4-7.6h-2.8l3.9 11.2h2.7l3.8-11.2h-2.8zm8.6 11.2h2.5V8.5h-2.5v11.2zm10 0c3.7 0 6.2-2.6 6.2-5.7 0-3.3-2.6-5.5-6.2-5.5h-4.3v11.2h4.3zm-1.8-9.2h1.6c2.2 0 3.6 1.4 3.6 3.6 0 2-1.4 3.6-3.6 3.6h-1.6v-7.2zm17.9 9.2h2.6l-4.4-11.2h-2.6l-4.4 11.2h2.6l1-2.6h4.8l1 2.6zm-4.9-4.6l1.6-4.5 1.6 4.5h-3.2z"/>
        </svg>
      )
    },
    {
      name: "supabase",
      svg: (
        <div className="flex items-center gap-1.5 font-bold tracking-tight text-xs">
          <svg className="w-4 h-4 fill-current text-emerald-500" viewBox="0 0 24 24">
            <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424a.792.792 0 0 0 .616 1.222H12v8.958a.396.396 0 0 0 .716.233l9.081-12.261a.792.792 0 0 0-.435-1.222z"/>
          </svg>
          <span className="font-semibold text-[11px] tracking-wider lowercase">supabase</span>
        </div>
      )
    },
    {
      name: "GitHub",
      svg: (
        <div className="flex items-center gap-1.5 font-bold tracking-tight text-xs">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          <span className="font-semibold text-[11px] tracking-wider">GitHub</span>
        </div>
      )
    },
    {
      name: "OpenAI",
      svg: (
        <div className="flex items-center gap-1.5 font-bold tracking-tight text-xs">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.98 4.185a5.984 5.984 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.08 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.493zm-9.66-4.82a4.47 4.47 0 0 1-.534-3.013l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.38a4.5 4.5 0 0 1-6.14-1.77zm-1.08-8.232a4.469 4.469 0 0 1 2.35-1.97v5.676a.79.79 0 0 0 .392.681l5.839 3.37-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.52 9.378zm15.654 3.237L12.33 9.245l2.02-1.164a.08.08 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.39-.681zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L8.809 9.354V7.022a.08.08 0 0 1 .033-.062l4.84-2.796a4.499 4.499 0 0 1 6.68 4.79zm-12.641 4.14l-2.02-1.164a.08.08 0 0 1-.038-.057V6.73a4.499 4.499 0 0 1 7.37-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.392.681v6.738zm1.096-1.92l2.76-1.593 2.76 1.593v3.187l-2.76 1.593-2.76-1.593z"/>
          </svg>
          <span className="font-semibold text-[11px] tracking-wider">OpenAI</span>
        </div>
      )
    },
    {
      name: "IIT Patna",
      svg: (
        <div className="flex items-center gap-1.5 font-bold tracking-tight text-xs">
          <img src={iitPatnaLogo} alt="IIT Patna" className="w-4 h-4 object-contain" />
          <span className="font-semibold text-[11px] tracking-wider">IIT Patna</span>
        </div>
      )
    },
    {
      name: "Claude",
      svg: (
        <div className="flex items-center gap-1.5 font-bold tracking-tight text-xs">
          <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 24 24">
            <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z"/>
          </svg>
          <span className="font-semibold text-[11px] tracking-wider">Claude</span>
        </div>
      )
    },
    {
      name: "Google AI",
      svg: (
        <div className="flex items-center gap-1.5 font-bold tracking-tight text-xs">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
          </svg>
          <span className="font-semibold text-[11px] tracking-wider">Google AI</span>
        </div>
      )
    },
    {
      name: "Vercel",
      svg: (
        <div className="flex items-center gap-1.5 font-bold tracking-tight text-xs">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 1L24 22H0L12 1Z"/>
          </svg>
          <span className="font-semibold text-[11px] tracking-wider">Vercel</span>
        </div>
      )
    }
  ];

  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#12141c] p-4 sm:p-5 shadow-xs">
      <div className="text-center mb-4">
        <h3 className="text-xs sm:text-sm font-semibold tracking-tight text-slate-500 dark:text-slate-400">
          Companies & institutions we <span className="text-slate-900 dark:text-white font-bold">collaborate with.</span>
        </h3>
      </div>

      {/* Static 2-row x 4-column Grid with Crosshairs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 border border-black/10 dark:border-white/10 rounded-xl overflow-hidden bg-black/[0.01] dark:bg-white/[0.01]">
        {brands.map((brand, idx) => {
          const isRightEdge = idx % 2 === 1; // 2 cols on mobile
          const isBottomRow = idx >= 6;

          return (
            <div 
              key={brand.name}
              className={`relative py-4 px-3 flex items-center justify-center text-slate-700 dark:text-slate-200 border-black/10 dark:border-white/10 ${
                !isRightEdge ? 'border-r' : ''
              } ${
                !isBottomRow ? 'border-b' : ''
              } hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors`}
            >
              {brand.svg}

              {/* Crosshair "+" marker at borders */}
              {!isRightEdge && (
                <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 text-slate-400/40 dark:text-slate-600 font-mono text-[10px] select-none pointer-events-none">
                  +
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileCollabGrid;
