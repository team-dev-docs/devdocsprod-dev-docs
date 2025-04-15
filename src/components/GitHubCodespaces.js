import React from 'react';
import styles from './GitHubCodespaces.module.css';
import { IconExternalLink } from '@tabler/icons-react';
import { CodespaceOpener } from '@site/src/components/CodespaceOpener';
import clsx from 'clsx';
import BrowserOnly from '@docusaurus/BrowserOnly';

function GitHubCodespacesContent() {
  // Check if we're in a codespace by looking for the CODESPACES environment variable
  const isInCodespace = localStorage.getItem('codespace')

  const handleClick = () => {
    // Get the codespace URL from the current window location
    // This assumes we're in a codespace; you might need to adjust the URL construction
    const codespaceUrl = window.location.origin;
    window.open(codespaceUrl, '_blank');
  };

  if (!isInCodespace) {
    return null;
  }

  return (
    <CodespaceOpener />
  );
}

export default function GitHubCodespaces() {
  return (
    <BrowserOnly>
      {() => <GitHubCodespacesContent />}
    </BrowserOnly>
  );
} 