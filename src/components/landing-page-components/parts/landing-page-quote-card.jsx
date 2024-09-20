import React from 'react';

const LandingPageQuoteCard = ({
  avatarSrc,
  title,
  company,
  quote,
}) => {
  return (
    <div
      className='relative'
    >
      <div
        className="relative w-[21.4375rem] h-[14.6875rem] p-[1.5625rem] bg-[#0E1330] rounded-[0.625rem] flex flex-col gap-[1.56rem] z-10"
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
        className="absolute bottom-[-1.53125rem] left-[-1.53125rem] rounded-[0.625rem] w-[24.5rem] h-[6.875rem]"
        style={{
          background: "url('/landing-page/quote-card-mask-group.svg')",
          backdropFilter: "blur(12.5px)",
        }}
      />
    </div>
  );
};

export default LandingPageQuoteCard;
