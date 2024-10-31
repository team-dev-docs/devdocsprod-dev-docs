import React, { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '../context-providers/mobile-context-provider';

const LandingPageQuoteCard = ({
  avatarSrc,
  title,
  company,
  quote,
}) => {
  const cardRef = useRef(null);
  const [carWidth, setCardWidth] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleResize = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    if (cardRef.current) {
      resizeObserver.observe(cardRef.current);
    }

    handleResize();

    return () => {
      if (cardRef.current) {
        resizeObserver.unobserve(cardRef.current);
      }
    };
  }, [cardRef]);

  return (
    <div
      className='relative flex justify-center'
    >
      <div
        ref={cardRef}
        className={`relative w-full max-w-[21.4375rem] p-[1.5625rem] min-h-[14.6875rem] bg-[#0E1330] rounded-[0.625rem] flex flex-col gap-[1.56rem] z-10`}
        style={{
          border: "1px solid var(--Neutral-gray-500, #282D45)",
        }}
      >
        <div
          className="h-[2.48688rem] w-full flex justify-between"
        >
          <div
            className="flex gap-[0.62rem]"
          >
            <img
              className="my-0"
              src={avatarSrc}
            />
            <div
              className="flex flex-col justify-between h-full"
            >
              <div>
                {title}
              </div>
              <div
                className="text-[0.75rem] text-[#8F9BB7]"
              >
                {company}
              </div>
            </div>
          </div>

          <img
            className="my-0"
            src="/landing-page/double-quote.svg"
          />
        </div>

        <div>
          {quote}
        </div>
      </div>

      <div
        className="absolute rounded-[0.625rem] w-[24.5rem] h-[6.875rem] bottom-[-1rem]"
        style={{
          background: "url('/landing-page/quote-card-mask-group.svg')",
          backdropFilter: "blur(12.5px)",
        }}
      />
    </div>
  );
};

export default LandingPageQuoteCard;
