import React from 'react';
import LandingPageCard from '../parts/landing-page-card';
import LandingPageDropdown from '../parts/landing-page-dropdown';

const FAQS = [
  {
    title: "Lore ipsum dolor sit amet?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, gravida nunc. Nullam auctor, nisl id tincidunt efficitur, nulla urna vehicula turpis, nec ultrices purus purus nec nunc. Nulla nec purus feugiat, molestie ipsum et, gravida nunc. Nullam auctor, nisl id tincidunt efficitur, nulla urna vehicula turpis, nec ultrices purus purus nec nunc.",
  },
  {
    title: "Lore ipsum dolor sit amet?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, gravida nunc. Nullam auctor, nisl id tincidunt efficitur, nulla urna vehicula turpis, nec ultrices purus purus nec nunc. Nulla nec purus feugiat, molestie ipsum et, gravida nunc. Nullam auctor, nisl id tincidunt efficitur, nulla urna vehicula turpis, nec ultrices purus purus nec nunc.",
  },
  {
    title: "Lore ipsum dolor sit amet?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, gravida nunc. Nullam auctor, nisl id tincidunt efficitur, nulla urna vehicula turpis, nec ultrices purus purus nec nunc. Nulla nec purus feugiat, molestie ipsum et, gravida nunc. Nullam auctor, nisl id tincidunt efficitur, nulla urna vehicula turpis, nec ultrices purus purus nec nunc.",
  },
];

const LandingPageFaqCard = () => {
  return (
    <LandingPageCard>
      <div
        className="font-extrabold text-[3rem]"
        style={{
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Puffin Arcade",
        }}
      >
        Commonly asked questions
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