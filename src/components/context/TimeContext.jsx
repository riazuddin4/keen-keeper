'use client';
import { createContext, useContext, useState } from "react";

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


export const useTimeline = () => {
    const context = useContext(TimelineContext);
    if (!context) {
        throw new Error("useTimeline must be used within TimelineProvider");
    }
    return context;
};

// export const useTimeline = () => useContext(TimelineContext); 