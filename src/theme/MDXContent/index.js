import React from 'react';
import MDXContent from '@theme-original/MDXContent';
import { TracingBeam } from "../../pages/tracing-beam";




export default function MDXContentWrapper(props) {
  return (
    // <TracingBeam className=''>
      <div style={{maxWidth: "100vw", overflowX: "hidden"}}>
        <MDXContent {...props} />
      </div>
    // </TracingBeam>
  );
}
