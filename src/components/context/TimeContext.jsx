'use client';
import { createContext, useState } from "react";

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
    const [timeline, setTimeline] = useState([]); 

    const addTimeline = (entry) => {
        setTimeline((prev) => [...prev, entry]);
    };
    console.log(timeline);
    return (
        <TimelineContext.Provider value={{ timeline, addTimeline }}>
            {children}
        </TimelineContext.Provider>
        
    );
};

export const useTimeline = () => useContext(TimelineContext); 