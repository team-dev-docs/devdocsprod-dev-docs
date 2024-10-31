import React from 'react';
import LandingPageCard from '../parts/landing-page-card';
import LandingPageQuoteCard from '../parts/landing-page-quote-card';
import { useIsMobile } from '../context-providers/mobile-context-provider';
import InfiniteMovingCards from '../../aceternity/infinite-moving-cards';

const QUOTES = [
  {
    avatarSrc: "https://media.licdn.com/dms/image/v2/C5603AQFvcCH3ZsGVgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516971572496?e=1732752000&v=beta&t=-_prz6beg4E5TbRa2st8dEJhMGPxXm7QsC0THupnorI",
    title: "Naman Goel, Software Engineer",
    company: "Meta",
    quote: "I’m very impressed with what Dev-Docs has managed to build. Anyone who feels guilty about the state of their documentation should definitely check them out!"
  },
  {
    avatarSrc: "https://media.licdn.com/dms/image/v2/D5622AQFS6bZ1WuGdow/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1713278437714?e=1730332800&v=beta&t=BFNsA4a3rIrYn7WJGRl9o22P67CT1xSW_mj54oQi5Jc",
    title: "Manny Silva, Head of Docs",
    company: "Skyflow",
    quote: "From code to docs in seconds. Readable, reliable docs."
  },
  {
    avatarSrc: "https://media.licdn.com/dms/image/v2/D5603AQE7kyH1Et3yNw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719427949285?e=1732752000&v=beta&t=vRedtBeZ-dqq2V_pwMu8smoBpHq_d_D7WJO7A-K0P-Y",
    title: "Nicole Zhu, Co-Founder",
    company: "Homebrew",
    quote: "I'm a fan of the Dev-Docs vision to automate technical docs with AI. We were able to scaffold an early version of Jan docs with Dev-Docs. It was seamless and enabled us to focus on product improvements. We love Dev-Docs!"
  },
  {
    avatarSrc: "https://media.licdn.com/dms/image/v2/D4E03AQFLpaKmB3gM_g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718279956094?e=1732752000&v=beta&t=UxffQRSlvy48Sjs7wPRR_oYTVh6YBE9PndURRFdCKho",
    title: "Jaime Barton, DX Engineer",
    company: "Turso",
    quote: "The automation tools that Dev-Docs provides is a huge timesaver, and I see the potential of Dev-Docs to make any documentation team feel like they have super powers. Especially the problem of when Docs are out of date"
  },
  {
    avatarSrc: "https://media.licdn.com/dms/image/v2/D5603AQHZMnWs9DoFrg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1681324259362?e=1732752000&v=beta&t=5l9866iY4ZJiCF_q7DpmWTCloHZRvza5S_c0_NP1i5g",
    title: "Adam Nolte, Co-Founder and CTO",
    company: "Autoblocks",
    quote: "Super excited by the product Dev-Docs is building.  With Dev-Docs, teams can ship fast while also knowing AI is helping them stay on top of keeping their docs updated and awesome"
  },
  {
    avatarSrc: "https://media.licdn.com/dms/image/v2/C5103AQHRsUJo_T59-A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516334216743?e=1732752000&v=beta&t=4xxZQr-84WSzV5hL_dfIpc2NhJQ80oQBeBEWQTTBWNI",
    title: "Sean Shoffstall, CTO and Partner",
    company: "Beginly Health",
    quote: "Dev Docs has made something I hated (writing documentation), and thus didn't do, into something that is a no brainer. Additionally, it makes it so all developers are writing at the same level no matter what their doc experience is. I love this and the team is so great and always pushing new features focused on our workflows!"
  },
  {
    avatarSrc: "https://media.licdn.com/dms/image/v2/C4D03AQEiswf4X1uQUQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516608966990?e=1732752000&v=beta&t=99Sb9G0jW0kakC5AAM21H3H_gxEs9UiY39wOaTtMPFM",
    title: "Richard Cuellar-Lopez, Founder and CEO",
    company: "Ourarmada",
    quote: "Dev-Docs is a must have for fast moving teams that have full-time, part-time, outsourced Engs drop into your codebase regularly. It establishes the uniform standard that makes onboarding, code handoff, and referencing smooth."
  },
  {
    avatarSrc: "https://media.licdn.com/dms/image/v2/D5603AQHTpVPYaz9naA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718211319574?e=1732752000&v=beta&t=oC27RDDKXOoBRbdruGbX99vmm-PQePVsqAV4csRyoDU",
    title: "Nicholas Fry, CEO and Founder",
    company: "Turbodocx",
    quote: "Dev-Docs team is super responsive and awesome, and they helped us create our initial docs page and gave us world class support when we had questions.  Super excited about what they are building."
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