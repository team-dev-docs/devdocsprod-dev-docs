import React from 'react';
import GitHubAuth from '@site/src/components/GitHubAuth';
import clsx from 'clsx';

export default function CustomGitHubAuth({
  className,
  ...props
}) {
  return (
    <div className={clsx('navbar__item', className)}>
      <GitHubAuth {...props} />
    </div>
  );
} 