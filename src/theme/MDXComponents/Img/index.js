import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { DevDocsImageFrame } from '@site/src/components/ui/image-frame.jsx';

function transformImgClassName(className) {
  return clsx(className, styles.img);
}

export default function MDXImg(props) {
  console.log("what are the props", props)
  return (
    <DevDocsImageFrame
      {...props}
    />
  );
}
