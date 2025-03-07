import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';

import CodeSnippets from '@site/src/components/CodeSnippets';
import InfoBox from '@site/src/components/InfoBox';

import { DevDocsCard } from '@site/src/components/ui/card';
import { DevDocsAccordion } from '@site/src/components/ui/accordion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@site/src/components/ui/tabs.jsx';
import { Terminal } from '@site/src/components/ui/terminal';

export default {
  ...MDXComponents,
  CodeSnippets,
  InfoBox,
  Card: DevDocsCard,
  Accordion: DevDocsAccordion,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Terminal
};
