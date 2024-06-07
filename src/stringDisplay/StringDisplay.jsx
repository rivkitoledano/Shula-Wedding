import React from 'react';

const StringDisplay = ({ longString }) => {
  // Replace commas with line breaks
  const formattedString = longString.split('.').join('<br/>');
  
  return (
    <div
      dangerouslySetInnerHTML={{ __html: formattedString }}
      style={{ whiteSpace: 'pre-line' }}
    />
  );
};

export default StringDisplay;