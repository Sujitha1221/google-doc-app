// YourFormComponent.tsx
import React, { useState } from 'react';

interface YourFormComponentProps {
    onSubmit: (driveLink: string) => void;
}

const YourFormComponent: React.FC<YourFormComponentProps> = ({ onSubmit }) => {
    const [driveLink, setDriveLink] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(driveLink); // Call the onSubmit prop with the driveLink
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Google Drive Link:
                <input
                    type="text"
                    value={driveLink}
                    onChange={(e) => setDriveLink(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default YourFormComponent;
