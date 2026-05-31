export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          For AI &amp; Prompt Engineers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Compare AI Outputs Across{' '}
          <span className="text-[#58a6ff]">Prompt Versions</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Stop guessing which prompt works best. Run side-by-side diffs of AI model outputs, track version history, and ship better prompts faster.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Comparing — $19/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 rounded-xl border border-[#30363d] bg-[#161b22] p-6 text-left">
          <div className="flex gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#f85149] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#e3b341] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#3fb950] inline-block"></span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-[#58a6ff] font-semibold mb-2">Prompt v1</p>
              <p className="text-sm text-[#8b949e] bg-[#0d1117] rounded p-3">Summarize this article in 3 bullet points.</p>
              <p className="text-xs text-[#3fb950] mt-3 font-semibold mb-1">Output</p>
              <p className="text-sm text-[#c9d1d9] bg-[#0d1117] rounded p-3">• AI is transforming industries<br/>• Costs are dropping rapidly<br/>• Adoption is accelerating</p>
            </div>
            <div>
              <p className="text-xs text-[#58a6ff] font-semibold mb-2">Prompt v2</p>
              <p className="text-sm text-[#8b949e] bg-[#0d1117] rounded p-3">Summarize this article in 3 concise bullet points with key stats.</p>
              <p className="text-xs text-[#3fb950] mt-3 font-semibold mb-1">Output</p>
              <p className="text-sm text-[#c9d1d9] bg-[#0d1117] rounded p-3">• AI cuts costs by <span className="bg-[#1a3a1a] text-[#3fb950] px-1 rounded">40%</span> in ops<br/>• <span className="bg-[#1a3a1a] text-[#3fb950] px-1 rounded">73%</span> of firms adopting AI<br/>• Market hits <span className="bg-[#1a3a1a] text-[#3fb950] px-1 rounded">$1.8T</span> by 2030</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-xl border border-[#58a6ff] bg-[#161b22] p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19<span className="text-xl text-[#8b949e] font-normal">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to ship better prompts</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited prompt comparisons',
              'Side-by-side diff with highlighting',
              'Version history & project management',
              'Export results as CSV or JSON',
              'Support for GPT-4, Claude, Gemini & more',
              'Team collaboration (up to 5 seats)'
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">Which AI models are supported?</h3>
            <p className="text-[#8b949e] text-sm">We support OpenAI (GPT-3.5, GPT-4, GPT-4o), Anthropic (Claude 3 family), Google (Gemini Pro, Gemini Flash), and more. You bring your own API keys.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">How does the diff highlighting work?</h3>
            <p className="text-[#8b949e] text-sm">Outputs are compared word-by-word and sentence-by-sentence. Added, removed, and changed content is highlighted with color coding so you instantly see what changed between prompt versions.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel anytime from your billing dashboard. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} AI Prompt Output Differ. All rights reserved.
      </footer>
    </main>
  )
}
