import React, { useContext, createContext, useState } from 'react'

export const SelectedContext = createContext();

export function useSelected() {
    const { selectedHero, setSelectedHero } = useContext(SelectedContext);
    return { selectedHero, setSelectedHero };
}

export default function SelectedContextProvider({ children }) {

    const [selectedHero, setSelectedHero] = useState([]);

    return (
        <SelectedContext.Provider value={{ selectedHero, setSelectedHero }}>
            {children}
        </SelectedContext.Provider>
    )
}
