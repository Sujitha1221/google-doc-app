// DocumentViewer.tsx
import React from 'react';

interface DocumentViewerProps {
    fileId: string;
}

const DocumentViewer: React.FC<DocumentViewerProps> = ({ fileId }) => {
    const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;

    return (
        <div>
            <iframe
                title="Document Viewer"
                src={embedUrl}
                width="600"
                height="400"
                allowFullScreen
            />
        </div>
    );
};

export default DocumentViewer;
