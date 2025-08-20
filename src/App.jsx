import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame, Coins, Users, Wallet, Twitter, MessageCircle, Link as LinkIcon, Rocket, Shield } from 'lucide-react';

// Simple inline SVG phoenix logo (neon-ready)
function PhoenixLogo({ className = 'w-20 h-20' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 256 256"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="GFY Phoenix Logo"
    >
      <path d="M128 20c22 18 46 35 51 66 3 21-8 39-21 51 10-26-10-44-25-49 7 13 2 31-10 38-12-7-17-25-10-38-15 5-35 23-25 49-13-12-24-30-21-51 5-31 29-48 51-66z"/>
      <path d="M40 160c24 0 40-8 52-18-2 16-14 30-28 38-11 6-17 14-18 24 14-6 29-9 44-11 17-2 33-3 38-3s21 1 38 3c15 2 30 5 44 11-1-10-7-18-18-24-14-8-26-22-28-38 12 10 28 18 52 18-8 14-23 26-43 34-19 7-35 13-45 23-10-10-26-16-45-23-20-8-35-20-43-34z"/>
    </svg>
  );
}

const Section = ({ id, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    {children}
  </section>
);

const Button = ({ children, variant = 'primary', ...props }) => {
  const base = 'inline-flex items-center gap-2 font-semibold rounded-2xl px-5 py-3 transition';
  const styles = variant === 'primary'
    ? 'bg-lime-500 hover:bg-lime-400 text-black'
    : 'border border-white/20 text-white/90 hover:bg-white/10';
  return <button className={base + ' ' + styles} {...props}>{children}</button>;
};

const Card = ({ children }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">{children}</div>
);

export default function GFYSite() {
  return (
    <div className="min-h-screen bg-[#0b0a12] text-white selection:bg-lime-400/30">
      {/* Hero */}
      <Section id="hero">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight">
              For the degens who lost it all… <span className="text-lime-400">and still ape again.</span>
            </h1>
            <p className="mt-5 text-white/80 text-lg max-w-prose">
              $GFY is the anthem of survival — a meme token for every trader who’s been rugged, rekt, liquidated, and still shows up for the next candle.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button>Buy $GFY <ArrowRight className="w-4 h-4" /></Button>
              <Button variant="outline">Join the Cult <Rocket className="w-4 h-4" /></Button>
            </div>
          </div>
          <div className="text-lime-400"><PhoenixLogo className="w-48 h-48" /></div>
        </div>
      </Section>

      {/* About */}
      <Section id="about">
        <div className="grid md:grid-cols-3 gap-6">
          <Card><h3 className="font-semibold text-xl flex items-center gap-2"><Flame className="w-5 h-5 text-lime-400"/> The Vibe</h3><p className="text-white/80 mt-2">$GFY is therapy via memes. A community powered by cope, hope, and the occasional green candle.</p></Card>
          <Card><h3 className="font-semibold text-xl flex items-center gap-2"><Coins className="w-5 h-5 text-lime-400"/> The Token</h3><p className="text-white/80 mt-2">Built for maximum memeability and chaos. No promises, no solemn whitepapers — just vibes.</p></Card>
          <Card><h3 className="font-semibold text-xl flex items-center gap-2"><Users className="w-5 h-5 text-lime-400"/> The Tribe</h3><p className="text-white/80 mt-2">Join the GFY Army. Share memes, win contests, and help steer the chaos.</p></Card>
        </div>
      </Section>

      {/* Tokenomics */}
      <Section id="tokenomics">
        <h2 className="text-3xl font-extrabold mb-6 text-center">Tokenomics (Degenomics)</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <Card><h3 className="text-lime-400 font-semibold">69% Liquidity</h3><p className="text-white/80">Because memes &gt; math.</p></Card>
          <Card><h3 className="text-lime-400 font-semibold">20% Community</h3><p className="text-white/80">Giveaways, meme contests, chaos fund.</p></Card>
          <Card><h3 className="text-lime-400 font-semibold">10% Team</h3><p className="text-white/80">Devs need to Go Fund Themselves too.</p></Card>
          <Card><h3 className="text-lime-400 font-semibold">1% Burn</h3><p className="text-white/80">Keeps the phoenix warm.</p></Card>
        </div>
      </Section>

      {/* Roadmap */}
      <Section id="roadmap">
        <h2 className="text-3xl font-extrabold mb-6 text-center">Degenmap</h2>
        <div className="space-y-4">
          <Card><h3 className="font-semibold text-xl">Phase 1 — Rug Resistance</h3><p className="text-white/80">Launch token, LP lock, website live, socials lit.</p></Card>
          <Card><h3 className="font-semibold text-xl">Phase 2 — Cope & Hope</h3><p className="text-white/80">Listings, meme contests, survival guide drop.</p></Card>
          <Card><h3 className="font-semibold text-xl">Phase 3 — Moon or Doom</h3><p className="text-white/80">NFT collectibles of rekt moments. GFY DAO.</p></Card>
          <Card><h3 className="font-semibold text-xl">Phase 4 — Ultimate Rebirth</h3><p className="text-white/80">Alliances with other meme projects, merch.</p></Card>
        </div>
      </Section>

      {/* Community */}
      <Section id="community">
        <h2 className="text-3xl font-extrabold mb-6 text-center">Join the GFY Army</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button variant="outline"><Twitter className="w-4 h-4"/> Twitter</Button>
          <Button variant="outline"><MessageCircle className="w-4 h-4"/> Telegram</Button>
          <Button variant="outline"><LinkIcon className="w-4 h-4"/> Linktree</Button>
          <Button variant="outline"><Wallet className="w-4 h-4"/> DEX</Button>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-8">
        <Section id="footer">
          <div className="text-center text-white/60 text-sm">
            $GFY is a meme coin. Not financial advice. Don’t invest what you can’t afford to GFY.
          </div>
        </Section>
      </footer>
    </div>
  );
}
