import { useState, useEffect, useRef } from "react";
import { marked } from "marked";
import './markdown.css';

type MarkdownEditorProps = {
    initialContent?: string;
};

export default function MarkdownEditor({ initialContent = "" }: MarkdownEditorProps) {
    const [markdown, setMarkdown] = useState(initialContent);

    // Références pour le champ de saisie et la prévisualisation
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const previewRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Charger le fichier Markdown si aucun contenu initial n'est fourni
        if (!initialContent) {
            fetch("/exampleEN.md")
                .then((response) => response.text())
                .then((text) => setMarkdown(text))
                .catch((error) => console.error("Erreur lors du chargement du fichier Markdown:", error));
        }
    }, [initialContent]);

    // Synchronisation du défilement
    const handleTextareaScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
        const textarea = e.target as HTMLTextAreaElement;
        const preview = previewRef.current;

        if (preview) {
            // Synchronisation du défilement vertical
            const scrollRatioV = textarea.scrollTop / (textarea.scrollHeight - textarea.clientHeight);
            preview.scrollTop = scrollRatioV * (preview.scrollHeight - preview.clientHeight);

            // Synchronisation du défilement horizontal
            const scrollRatioH = textarea.scrollLeft / (textarea.scrollWidth - textarea.clientWidth);
            preview.scrollLeft = scrollRatioH * (preview.scrollWidth - preview.clientWidth);
        }
    };

    const handlePreviewScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const preview = e.target as HTMLDivElement;
        const textarea = textareaRef.current;

        if (textarea) {
            // Synchronisation du défilement vertical
            const scrollRatioV = preview.scrollTop / (preview.scrollHeight - preview.clientHeight);
            textarea.scrollTop = scrollRatioV * (textarea.scrollHeight - textarea.clientHeight);

            // Synchronisation du défilement horizontal
            const scrollRatioH = preview.scrollLeft / (preview.scrollWidth - preview.clientWidth);
            textarea.scrollLeft = scrollRatioH * (textarea.scrollWidth - textarea.clientWidth);
        }
    };

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            {/* Champ de saisie Markdown */}
            <textarea
                ref={textareaRef}
                style={{
                    flex: 1,
                    padding: "1rem",
                    fontSize: "16px",
                    fontFamily: "monospace",
                    overflow: "auto",  // Assurez-vous que le scroll est activé
                }}
                placeholder="Écrivez votre Markdown ici..."
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                onScroll={handleTextareaScroll} // Synchronisation du scroll
            />

            {/* Rendu HTML */}
            <div
                ref={previewRef}
                style={{
                    flex: 1,
                    padding: "1rem",
                    borderLeft: "1px solid #ccc",
                    overflow: "auto", // Assurez-vous que le scroll est activé
                }}
                dangerouslySetInnerHTML={{ __html: marked(markdown) }}
                onScroll={handlePreviewScroll} // Synchronisation du scroll
            />
        </div>
    );
}
