import React, { createContext, ReactNode, useContext, useState } from 'react';

interface DateContextProps {
    selectedDate: string;
    setSelectedDate: (date: string) => void;
}

const DateContext = createContext<DateContextProps | undefined>(undefined);

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
    const [selectedDate, setSelectedDate] = useState<string>('');

    return <DateContext.Provider value={{ selectedDate, setSelectedDate }}>{children}</DateContext.Provider>;
};
