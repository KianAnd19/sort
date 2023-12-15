import React, { createContext, useState } from 'react';

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
    const [isMuted, setIsMuted] = useState(false);
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    const playSound = (value, maxVal) => {
        if (isMuted) return;

        const oscillator = audioCtx.createOscillator();
        oscillator.type = 'sine';
        const maxFrequency = 1000;
        const frequency = (value / maxVal) * maxFrequency;
        oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.1);
    };

    return (
        <AudioContext.Provider value={{ isMuted, setIsMuted, playSound }}>
            {children}
        </AudioContext.Provider>
    );
};
