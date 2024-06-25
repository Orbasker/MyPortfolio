import React from 'react';

const FunnyPhrases = () => {
    const phrases = [
        "I'm not a great programmer; I'm just a good programmer with great habits.",
        "Code is like humor. When you have to explain it, it’s bad.",
        "In order to be irreplaceable, one must always be different."
    ];

    return (
        <div>
            <h2>Funny Phrases</h2>
            <ul>
                {phrases.map((phrase, index) => (
                    <li key={index}>{phrase}</li>
                ))}
            </ul>
        </div>
    );
};

export default FunnyPhrases;
