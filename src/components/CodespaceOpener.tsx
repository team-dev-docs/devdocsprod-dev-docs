import React from 'react';
import { IconWand, IconPlayerPlay, IconExternalLink } from '@tabler/icons-react';
import BrowserOnly from '@docusaurus/BrowserOnly';

interface CodespaceOpenerProps {
  codespace_name: string;
}
import styles from './styles.module.css';

export const CodespaceOpener: React.FC<CodespaceOpenerProps> = ({ codespace_name }) => {
  return (
    <BrowserOnly>
      {() => {
        const handleGetCodespace = async () => {
          const token = localStorage.getItem('github_token');
          if (!token) {
            console.error('No GitHub token found. Please authenticate first.');
            return;
          }
          
          try {
            const response = await fetch(`http://localhost:3002/codespaces/get?codespace_name=${codespace_name}`, {
              headers: {
                'x-github-token': token,
              },
            });
            
            const data = await response.json();
            
            if (data.success && data.url) {
              const shouldOpen = window.confirm('Would you like to open this codespace in a new tab?');
              if (shouldOpen) {
                window.open(data.url, '_blank');
              }
            } else {
              console.error('Could not fetch codespace:', data.message);
            }
          } catch (error) {
            console.error('Error fetching codespace:', error);
          }
        };

        return (
          <button onClick={handleGetCodespace}
          className="px-4 py-2 transition-colors">
               <span aria-hidden="true">
                  <IconExternalLink />
                </span>
          </button>
        );
      }}
    </BrowserOnly>
  );
}; 