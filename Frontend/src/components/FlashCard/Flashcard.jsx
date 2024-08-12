import React, { useState } from 'react';

const Flashcard = ({ flashcard, isFlipped, setIsFlipped }) => {
    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className="relative flex items-center justify-center w-[900px] h-[400px] p-8 border border-gray-300 rounded-xl shadow-2xl cursor-pointer transform transition-transform duration-500 hover:scale-105"
            onClick={handleFlip}
            style={{
                background: isFlipped
                    ? 'linear-gradient(to right, #feca57, #ee5253)'
                    : 'linear-gradient(to right, #111111, #1dd1a1)',
            }}
        >
            <div
                className={`absolute w-full h-full flex items-center justify-center transition-transform transform ${isFlipped ? 'rotate-y-180' : ''}`}
            >
                <div
                    className={`absolute inset-0 flex items-center justify-center p-6 ${isFlipped ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                >
                    <p className="text-3xl font-bold text-white text-center">{flashcard.question}</p>
                </div>
                <div
                    className={`absolute inset-0 flex items-center justify-center p-6 ${isFlipped ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 rotate-y-180`}
                >
                    <p className="text-3xl font-semibold text-white text-center">{flashcard.answer}</p>
                </div>
            </div>
        </div>
    );
};

export default Flashcard;
