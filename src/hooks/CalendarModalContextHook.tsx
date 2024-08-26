import React, { createContext, ReactNode, useContext, useState } from 'react';

interface CalendarModalContextProps {
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
}

const CalendarModalContext = createContext<CalendarModalContextProps | undefined>({
    isModalOpen: false,
    setIsModalOpen: () => {},
});

export const useCalendarModalContext = () => {
    const calendarModalContext = useContext(CalendarModalContext);
    if (!calendarModalContext) {
        throw new Error();
    }
    return calendarModalContext;
};

interface CalendarModalProviderProps {
    children: ReactNode;
}

export const CalendarModalProvider = ({ children }: CalendarModalProviderProps) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return (
        <CalendarModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
            {children}
        </CalendarModalContext.Provider>
    );
};
