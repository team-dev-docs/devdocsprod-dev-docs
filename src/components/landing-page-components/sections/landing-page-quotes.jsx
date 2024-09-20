import React from 'react';
import LandingPageCard from '../parts/landing-page-card';
import LandingPageQuoteCard from '../parts/landing-page-quote-card';

const QUOTES = [
  {
    avatarSrc: "/landing-page/avatar-1.svg",
    title: "CTO",
    company: "Funded pre-seed startup",
    quote: "This is productivity I cannot match."
  },
  {
    avatarSrc: "/landing-page/avatar-2.svg",
    title: "CEO",
    company: "Funded pre-seed startup",
    quote: "This is amazing. The opportunities to improve productivity are endless."
  },
  {
    avatarSrc: "/landing-page/avatar-3.svg",
    title: "CEO",
    company: "Profitable SMB",
    quote: "I’d never take the time to go create this documentation. This is great, it will be very helpful when I onboard my next engineers."
  },
];

const LandingPageQuotes = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-[3.75rem]"
    >
      <div
        className="font-extrabold text-[3rem]"
        style={{
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Puffin Arcade",
        }}
      >
        See what people are saying about Dev-Docs
      </div>

      <div
        className="flex flex-wrap gap-[4.56rem]"
      >
        {QUOTES.map((quote, index) => (
          <LandingPageQuoteCard
            key={index}
            avatarSrc={quote.avatarSrc}
            title={quote.title}
            company={quote.company}
            quote={quote.quote}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingPageQuotes;