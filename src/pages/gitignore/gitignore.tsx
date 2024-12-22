import React, { useEffect, useState } from 'react';
import './gitignore.css'; // Importation du fichier CSS

const GitignoreViewer: React.FC = () => {
    const [gitignoreContent, setGitignoreContent] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGitignore = async () => {
            try {
                const response = await fetch('/gitignore.txt'); // Assurez-vous que le fichier est dans public/
                if (!response.ok) {
                    throw new Error('Le fichier .gitignore est introuvable.');
                }
                const content = await response.text();
                setGitignoreContent(content);
            } catch (err: any) {
                setError(err.message);
            }
        };

        fetchGitignore();
    }, []);

    const handleDownload = () => {
        if (gitignoreContent) {
            const blob = new Blob([gitignoreContent], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = '.gitignore';
            a.click();
            URL.revokeObjectURL(url);
        }
    };

    return (
        <div className="gitignore-container">
            <div className="gitignore-content">
                <h1 className="gitignore-header">Visualiseur de fichier <code>.gitignore</code></h1>
                {error ? (
                    <p className="gitignore-error">{error}</p>
                ) : gitignoreContent ? (
                    <div>
                        <h2 className="gitignore-subheader">Contenu du fichier :</h2>
                        <pre className="gitignore-box">{gitignoreContent}</pre>
                        <button className="gitignore-button" onClick={handleDownload}>
                            Télécharger le fichier
                        </button>
                    </div>
                ) : (
                    <p className="gitignore-loading">Chargement du fichier .gitignore...</p>
                )}
            </div>
        </div>
    );
};

export default GitignoreViewer;
