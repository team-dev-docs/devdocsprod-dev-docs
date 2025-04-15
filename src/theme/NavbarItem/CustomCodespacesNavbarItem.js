import React from 'react';
import GitHubCodespaces from '@site/src/components/GitHubCodespaces';
import clsx from 'clsx';
import { CodespaceOpener } from '@site/src/components/CodespaceOpener';
import aiConfig from '@site/ai.json';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function CustomCodespacesNavbarItem({
  className,
  ...props
}) {
  // If GitHub features are disabled, don't render anything
  // if(!localStorage) return
  // if (!aiConfig.github_features) {
  //   return null;
  // }

  // const activeCodespace = localStorage.getItem('codespace')

  // const handleGetCodespace = async () => {
  //   const token = localStorage.getItem('github_token');
  //   if (!token) {
  //     console.error('No GitHub token found. Please authenticate first.');
  //     return;
  //   }
    
  //   try {
  //     // const response = await fetch(`http://localhost:3002/codespaces/get?codespace_name=${codespace_name}`, {
  //     //   headers: {
  //     //     'x-github-token': token,
  //     //   },
  //     // });
      
  //     // const data = await response.json();
      
  //     // if (data.success && data.url) {
  //     //   const shouldOpen = window.confirm('Would you like to open this codespace in a new tab?');
  //     //   if (shouldOpen) {
  //     //     window.open(data.url, '_blank');
  //     //   }
  //     // } else {
  //     //   console.error('Could not fetch codespace:', data.message);
  //     // }
  //   } catch (error) {
  //     console.error('Error fetching codespace:', error);
  //   }
  // };
  
  return (
    <BrowserOnly>
      {() => (
        <div className={clsx('navbar__item', className)}>
          {activeCodespace && (
            <CodespaceOpener codespace_name={activeCodespace} />
          )}
        </div>
      )}
    </BrowserOnly>
  );
} 