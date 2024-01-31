"use client";
import React, { useState, useEffect  } from "react";

import { BackgroundBeams } from "../components/background-beams";

import { TypewriterEffectSmooth } from "../components/typewriting-effect";




import { BentoGrid, BentoGridItem } from "../components/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";


import { cn } from "../utils/cn";

const backgroundStyle = {
  background: `url(/img/dev-docs-assets/ClippedHeroBg.png) lightgray 50% / cover no-repeat`,
  width: "100%",
  height: "951px",
  flexShrink: 0
};

const openLink = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const topHeading = {
  color: '#EEE',
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  fontFamily: 'Inter',
  fontSize: '78.13px',
  fontStyle: 'normal',
  fontWeight: 700, // Note: numerical value for font-weight
  lineHeight: 'normal',
  letterSpacing: '-0.391px'
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Generate Onboarding Docs for Your Enginering Teams",
    description: "Automatically Document your team's codebases so any engineer can onboard to a new repo in minutes",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Generate Your Public SDK Docs and API Docs Instantly",
    description: "Go from 0 Documentation to a full documentation Site and Wiki in minutes",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Document Your UI",
    description: "Use AI to document UI workflows and directly push to your public docs site or markdown repo",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Audit, Check, and Evaluate Your Docs",
    description:
      "Use AI to go through all your markdown docs to check the content for what is important for your team whether that is grammar or even quality of the content",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Document and Identity Issues in your codebases",
    description: "Provide custom prompts to the Dev-Docs to find and document issues in your code",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Easily find information through search and AI Chat",
    description: "Any documentation generated can be queried directly from VsCode using Dev-Docs, or using our chat and search cabalities online",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Sync Your Docs To Current Wiki",
    description: "Sync to external sources like Confluence for company wide visibility",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
 
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
 
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
 
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];


function Header() {
  return (
    <header className="w-full bg-transparent p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img src="/img/ddlogo.png" alt="Logo" className="h-10 mr-3" />
        </div>
      </div>
    </header>
  );
}






export default function WavyBackgroundDemo() {
  const words = [
    {
      text: "AI",
    },
    {
      text: "Generated",
    },
    {
      text: "Developer",
    },
    {
      text: "Documentation",
    },
    {
      text: "with",
    },
    {
      text: "Dev-Docs",
      className: "text-green-500 dark:text-green-500",
    },
  ];


  useEffect(() => {
    // Set the data-theme attribute to "dark" on the body
    document.body.classList.remove('dark');
    document.body.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');

    // Optional: Add any additional dark mode styling or logic here
  }, []);



  return (
   
    <div>



      <div style={backgroundStyle} className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
        <Header />
        <div className="h-[50rem] w-full bg-transparent relative flex items-center justify-center">



          <div className="text-white p-4 sm:p-24 flex flex-col items-start justify-between">
            <TypewriterEffectSmooth words={words} className={undefined} cursorClassName={undefined} />
            <p className="text-lg text-center mb-4">
              We are a documentation platform that helps developers generate, update, audit, and search documentation using AI all as you code.
            </p>
            <br></br>
            <p className="text-lg text-center mb-4">Integrates With the  Tools you Love</p>
            <div className="mt-8 mb-8 flex justify-center">
              {/* Render your images/logos */}
              
           
              <img src="/img/dev-docs-assets/dev-docs-VHVlLCAxOCBKdWwgMjAyMyAxODo0NDoyOCBHTVQ=.png" alt="Logo 1" className="h-8 sm:h-10 md:h-12 mx-1 sm:mx-2" />
              <img src="/img/dev-docs-assets/dev-docs-VHVlLCAxOCBKdWwgMjAyMyAyMDozMjoyMCBHTVQ=.png" alt="Logo 2" className="h-8 sm:h-10 md:h-12 mx-1 sm:mx-2" />
              <img src="/img/dev-docs-assets/dev-docs-VHVlLCAxOCBKdWwgMjAyMyAxODo0NTozMSBHTVQ=.png" alt="Logo 3" className="h-8 sm:h-10 md:h-12 mx-1 sm:mx-2" />
              <img src="/img/dev-docs-assets/dev-docs-VHVlLCAxOCBKdWwgMjAyMyAyMDoyMToyOSBHTVQ=.png" alt="Logo 4" className="h-8 sm:h-10 md:h-12 mx-1 sm:mx-2" />
              <img src="https://logo.clearbit.com/atlassian.com" className="h-8 sm:h-10 md:h-12 mx-1 sm:mx-2" />
            </div>
            <div className="flex space-x-2 mt-2">
            <button onClick={() => openLink('https://airtable.com/app0byUVW3Sh1SSme/pagBebmK6tVqA1Rsr/form')} className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-flex items-center">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span>
                  Join the Waitlist
                </span>
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
            <button onClick={() => openLink('https://calendly.com/srchat/dev-docs-founders')} className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-flex items-center">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span>
                Chat with The Founders
                </span>
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>

            </div>
        
          </div>



        </div>
      </div>
      <div className="text-white p-8 flex flex-col dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] items-start justify-between">

      <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Usecases
        </h1>
            <p className="text-lg text-center mb-4">
            Whether it’s for your internal engineering teams or your customers, Dev-Docs enables you to generate docs directly from your source code, without having to change your existing workflow.  Check out some usecases below:
            </p>
        
      </div>
  
      <div className="pb-8 min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}

        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <BentoGrid className="max-w-4xl mx-auto">
              {items.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
              ))}
        </BentoGrid>
      </div>
      <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist 🚀
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Dev-Docs is currently in a closed beta and working fast to bring you our AI powered documentation magic. Sign up for our waitlist below.
          </p>
          <div className="flex space-x-2 mt-8 items-center justify-center">
          <button onClick={() => openLink('https://airtable.com/app0byUVW3Sh1SSme/pagBebmK6tVqA1Rsr/form')}  className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-flex items-center">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span>
                  Join the Waitlist
                </span>
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
            </div>
        </div>
        <BackgroundBeams />
      </div>
    </div>
  
  );
}
