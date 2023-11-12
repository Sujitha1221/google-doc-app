// YourMainComponent.tsx
import React, { useState } from 'react';
import YourFormComponent from './components/YourFormComponent';
import DocumentViewer from './components/DocumentViewer';
import { extractFileId } from './components/YourHelperFunctions';

const YourMainComponent: React.FC = () => {
  const [fileId, setFileId] = useState<string | null>(null);

  const handleFormSubmit = (driveLink: string) => {
    const extractedFileId = extractFileId(driveLink);
    setFileId(extractedFileId);
  };

  return (
    <div>
      <YourFormComponent onSubmit={handleFormSubmit} />
      {fileId && <DocumentViewer fileId={fileId} />}
    </div>
  );
};

export default YourMainComponent;
