import React, { useState, useEffect } from 'react';
import zlib from 'zlib';
import { useDoc } from '@docusaurus/theme-common/internal'

const RenderTable = ({ data }) => {
  if (!data || typeof data !== 'object') {
    return null;
  }

  return (
    <table>
      <tbody>
        {Object.entries(data).map(([key, value], index) => (
          <tr key={index}>
            <td>{key}</td>
            <td>{typeof value === 'object' ? JSON.stringify(value, null, 2) : value.toString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const JsonToTable = () => {
  const [decodedData, setDecodedData] = useState({});
  const { frontMatter } = useDoc();

  useEffect(() => {
    if (frontMatter.api) {
      try {
        const decodedJSON = JSON.parse(
          zlib.inflateSync(Buffer.from(frontMatter.api, 'base64')).toString()
        );
        setDecodedData(decodedJSON);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    }
  }, [frontMatter.api]);

  return (
    <div>
      {Object.entries(decodedData).map(([sectionTitle, sectionData], index) => (
        <React.Fragment key={index}>
          <h2>{sectionTitle}</h2>
          <RenderTable data={sectionData} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default JsonToTable;
