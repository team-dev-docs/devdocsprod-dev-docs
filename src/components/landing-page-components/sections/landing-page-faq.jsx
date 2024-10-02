import React from 'react';
import LandingPageCard from '../parts/landing-page-card';
import LandingPageDropdown from '../parts/landing-page-dropdown';
import { useIsMobile } from '../context-providers/mobile-context-provider';

const FAQS = [
  {
    title: "How does pricing work?",
    description: "We charge a flat fee for an allotted amount of monthly credits. If you run out of credits on a given month you can always purchase more but you will never be charged overages or anything of the sort. You can always upgrade your plan for a larger monthly allotment if you are consistently reaching your monthly threshold.",
  },
  {
    title: "What are Dev-Docs’ security practices?",
    description: "With founders coming from Okta and Stripe, Dev-Docs makes security the utmost priority in everything we do and has built the product from the ground up with a security first mindset. We believe that our users' security and privacy is paramount to our success. Your source code is your IP and should only be accessed by you. We understand the importance of protecting your IP and do not, and never will, store or train on any of your code. We are actively pursuing SOC 2 Type 2 compliance and have controls in place to do so. ",
  },
  {
    title: "Who is Dev-Docs for?",
    description: "Dev-Docs is for anyone who wants to generate content from their codebase or more efficiently generate documentation. We often find developers, technical writers, and product managers use us the most. Our goal is not to replace anyone but instead to give these folks super powers. That is, we want to automate the annoying elements of their jobs so they can focus on the more strategic and fun parts!",
  },
];

const LandingPageFaqCard = () => {
  const { isMobile } = useIsMobile();

  return (
    <LandingPageCard>
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
        Frequently asked questions
      </div>

      <div
        className="w-full"
      >
        {FAQS.map((faq, idx) => (
          <LandingPageDropdown
            key={`landing-page-faq-dropdown-${idx}`}
            title={faq.title}
            description={faq.description}
            borderBottom={idx < FAQS.length - 1}
          />
        ))}
      </div>
    </LandingPageCard>
  );
};

export default LandingPageFaqCard;