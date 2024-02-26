import React from 'react';
import MDXContent from '@theme-original/MDXContent';

import TracingBeam from '@site/src/components/tracing-beam';



export default function MDXContentWrapper(props) {
  return (
    <TracingBeam className=''>
    
        <MDXContent {...props} />
  
    </TracingBeam>
  );
}
