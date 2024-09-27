import React from 'react';
import LandingPageCard from '../parts/landing-page-card';
import LandingPageQuoteCard from '../parts/landing-page-quote-card';
import { useIsMobile } from '../context-providers/mobile-context-provider';
import InfiniteMovingCards from '../../aceternity/infinite-moving-cards';

const QUOTES = [
  {
    avatarSrc: "/landing-page/avatar-1.svg",
    title: "Naman Goel, Software Engineer",
    company: "Meta",
    quote: "I’m very impressed with what Dev-Docs has managed to build. Anyone who feels guilty about the state of their documentation should definitely check them out!"
  },
  {
    avatarSrc: "/landing-page/avatar-3.svg",
    title: "Manny Silva, Head of Docs",
    company: "Skyflow",
    quote: "From code to docs in seconds. Readable, reliable docs."
  },
  {
    avatarSrc: "/landing-page/avatar-2.svg",
    title: "Nicole Zhu, Co-Founder",
    company: "Jan AI",
    quote: "I'm a fan of the Dev-Docs vision to automate technical docs with AI. We were able to scaffold an early version of Jan docs with Dev-Docs. It was seamless and enabled us to focus on product improvements. We love Dev-Docs!"
  },
  {
    avatarSrc: "/landing-page/avatar-2.svg",
    title: "Jaime Barton, DX Engineer",
    company: "Turso",
    quote: "The automation tools that Dev-Docs provides is a huge timesaver, and I see the potential of Dev-Docs to make any documentation team feel like they have super powers. Especially the problem of when Docs are out of date"
  },
  {
    avatarSrc: "/landing-page/avatar-3.svg",
    title: "Adam Nolte, Co-Founder and CTO",
    company: "Autoblocks",
    quote: "Super excited by the product Dev-Docs is building.  With Dev-Docs, teams can ship fast while also knowing AI is helping them stay on top of keeping their docs updated and awesome"
  },
  {
    avatarSrc: "/landing-page/avatar-1.svg",
    title: "Sean Shoffstall, CTO and Partner",
    company: "Beginly Health",
    quote: "Dev Docs has made something I hated (writing documentation), and thus didn't do, into something that is a no brainer. Additionally, it makes it so all developers are writing at the same level no matter what their doc experience is. I love this and the team is so great and always pushing new features focused on our workflows!"
  },
  {
    avatarSrc: "/landing-page/avatar-2.svg",
    title: "Richard Cuellar-Lopez, Founder and CEO",
    company: "Ourarmada",
    quote: "Dev-Docs is a must have for fast moving teams that have full-time, part-time, outsourced Engs drop into your codebase regularly. It establishes the uniform standard that makes onboarding, code handoff, and referencing smooth."
  }
];

const LandingPageQuotes = () => {
  const isMobile = useIsMobile();

  return (
    <div
      className="flex flex-col items-center justify-center gap-[3.75rem]"
    >
      <div
        className={isMobile ?
          "font-extrabold text-[2rem] text-center font-pixel"
          :
          "font-extrabold text-[3rem] text-center font-pixel"
        }
        style={{
          fontFeatureSettings: "'liga' off, 'clig' off",
        }}
      >
        See what people are saying about Dev-Docs
      </div>

      <InfiniteMovingCards
        items={QUOTES}
      />

      {/* <div
        className={isMobile ?
          "flex flex-wrap gap-[3.12rem] w-full justify-center items-center px-[1.88rem]"
          :
          "flex flex-wrap gap-[4.56rem] w-full justify-center items-center px-[1.88rem]"
        }
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
      </div> */}
    </div>
  );
};

export default LandingPageQuotes;