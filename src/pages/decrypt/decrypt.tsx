import React, { useState } from "react";
import EncryptionTypeDetector from "./components/detect";
import "./decrypt.css";

const EncryptionDetectorApp: React.FC = () => {
    const [message, setMessage] = useState("");

    return (
        <div className="container">
            <h2 className="title">Détecteur de Type de Cryptage</h2>
            <textarea
                className="textarea"
                placeholder="Entrez le message crypté ici..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            {message && <EncryptionTypeDetector message={message} />}
        </div>
    );
};

export default EncryptionDetectorApp;
