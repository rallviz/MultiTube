"use client";

import { useState } from 'react';
import MusicPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import songsList from './components/videosList';

const Page = () => {
    const [currentSong, setCurrentSong] = useState<number>(0); // Aqui especificamos o tipo como number

    return (
        <div className="flex relative">
            <div className="logo-container absolute top-4 left-4"> {}
                <img src="\assets\images\logo.png" alt="Logo" className="h-12" /> {}
            </div>
            <div className="flex-1">
                <MusicPlayer 
                    currentSong={currentSong} 
                    songsList={songsList} 
                    setCurrentSong={setCurrentSong} 
                />
            </div>
            <Sidebar 
                songsList={songsList} 
                currentSong={currentSong} 
                setCurrentSong={setCurrentSong} 
            />
        </div>
    );
};

export default Page;