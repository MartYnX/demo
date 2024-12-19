'use client'

import React, { useState } from 'react';
import './fmng.css';

const adjectives = [
    "bubble", "sleepy", "lazy", "angry", "barking", "yelling",
    "shouting", "fluffy", "peachy", "strawberry", "hungry",
    "windy", "plush", "sparkle", "candy", "sugar", "sweet",
    "smokey", "spicy", "sassy", "curly", "happy", "silly",
    "gloomy", "geeky", "dorky", "chipper", "cheerful",
    "milky", "soy", "pastel", "fur", "chocolate",
    "creamy", "leaping", "licking", "fruity", "frisky",
    "mini", "robo", "lovely", "smol", "chill",
    "cozy", "chunky", "boba", "wonder",
    "stripey", "spooky", "dark",
    "cryptid", "super", "wicked",
    "sky", "pixel", "gay", "celestial", "vintage",
    "shiny", "lazy", "hungry", "dreamy"
];

const nouns = [
    "dog", "cat", "wolf", "canine", "feline", "bear",
    "lion", "bug", "ghost", "bat", "puppy", "flower",
    "sprout", "angel", "dragon", "cookie", "donut",
    "tea", "corgi", "wufsky", "gore", "core", "raccoon",
    "tiger", "mink", "otter", "fur", "tea", "gecko",
    "lizard", "bone", "apple", "peach", "lime", "lemon",
    "fruit", "husky", "tangerine", "cryptid", "bean",
    "collie", "cocoa", "furry", "friend", "kitten", "kitty",
    "worm", "wolfsky", "hound", "chomp", "works",
    "star", "light", "bones", "sheep", "doe", "moon",
    "teeth", "spirit", "paw", "island", "coyote"
];

const place = [
    "studios", "workshop", "creations", "costumes",
    "suits", "fursuits", "suiting", "productions",
    "works", "arts", "mascots", "critters", "creatures",
    "designs", "labs", "laboratory", "central", "collective",
];

const fonts = [
    "Bangers", "Creepster", "Fredoka One", "Hanalei Fill", "Lobster",
    "Love Ya Like A Sister", "Luckiest Guy", "Peralta", "Press Start 2P",
    "Shojumaru", "Poppins", "Carter One", "Chewy", "Lemon", "Lily Script One",
    "Oleo Script Swash Caps", "Sigmar One", "Skranji", "Sniglet"
];

const randomEl = (list: string[]) => {
    const i = Math.floor(Math.random() * list.length);
    return list[i];
};

const FursuitMakerNameGenerator: React.FC = () => {
    const [generatedName, setGeneratedName] = useState<string>('');
    const [isNameGenerated, setIsNameGenerated] = useState<boolean>(false);
    const [selectedFont, setSelectedFont] = useState<string>('');

    const generateName = () => {
        const newName = `${randomEl(adjectives)} ${randomEl(nouns)} ${randomEl(place)}`;
        setGeneratedName(newName);
        setIsNameGenerated(true);
        setSelectedFont(randomEl(fonts));

        // Réinitialiser l'animation
        const nameElement = document.getElementById("generated-name");
        if (nameElement) {
            nameElement.classList.remove("fade-in");
            void nameElement.offsetWidth; // Trigger reflow
            nameElement.classList.add("fade-in");
        }
    };

    return (
        <div className="fursuit-maker-name-generator">
            <header>
                <h1><i className="fa fa-smile-o"></i> Fursuit Maker Name Generator</h1>
            </header>
            <main>
                {isNameGenerated && (
                    <div id="generated-name" className="fade-in">
                        <h3>Your new name is:</h3>
                        <h2 style={{ fontFamily: selectedFont }}>{generatedName}</h2>
                    </div>
                )}
                <button onClick={generateName}>
                    {isNameGenerated ? 'Generate New Name' : 'Generate Name'}
                </button>
            </main>
        </div>
    );
};

export default FursuitMakerNameGenerator;