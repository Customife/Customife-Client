import React, { createContext, ReactNode, useContext, useState } from 'react';

interface DateContextProps {
    selectedDate: Date;
    setSelectedDate: (date: Date) => void;
}

const getTodayDate = () => {
    // const today = new Date();
    // const year = today.getFullYear();
    // const month = String(today.getMonth() + 1).padStart(2, '0');
    // const day = String(today.getDate()).padStart(2, '0');
    // return `${year}-${month}-${day}`;
    return new Date();
};

const DateContext = createContext<DateContextProps | undefined>({
    selectedDate: getTodayDate(),
    setSelectedDate: () => {},
});

export const useDateContext = () => {
    const dateContext = useContext(DateContext);
    if (!dateContext) {
        throw new Error();
    }
    return dateContext;
};

interface DateProviderProps {
    children: ReactNode;
}

export const DateProvider = ({ children }: DateProviderProps) => {
    const [selectedDate, setSelectedDate] = useState<Date>(getTodayDate());

    return <DateContext.Provider value={{ selectedDate, setSelectedDate }}>{children}</DateContext.Provider>;
};
