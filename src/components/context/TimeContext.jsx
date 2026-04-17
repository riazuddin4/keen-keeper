'use client';
import { createContext, useContext, useState, useEffect } from "react";

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {

    const [timeline, setTimeline] = useState([]);

  
    useEffect(() => {
        const storedData = localStorage.getItem("timeline");
        if (storedData) {
            setTimeline(JSON.parse(storedData));
        }
    }, []);

 
    useEffect(() => {
        localStorage.setItem("timeline", JSON.stringify(timeline));
    }, [timeline]);

    const addTimeline = (entry) => {
        setTimeline((prev) => [...prev, entry]);
    };

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