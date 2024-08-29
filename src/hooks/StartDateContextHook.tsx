import React, { createContext, ReactNode, useContext, useState } from 'react';

interface StartDateContextProps {
    startDate: Date;
    setStartDate: (date: Date) => void;
}

const StartDateContext = createContext<StartDateContextProps | undefined>({
    startDate: new Date(),
    setStartDate: () => {},
});

export const useStartDateContext = () => {
    const startDateContext = useContext(StartDateContext);
    if (!startDateContext) {
        throw new Error();
    }
    return startDateContext;
};

interface StartDateProviderProps {
    children: ReactNode;
}

export const StartDateProvider = ({ children }: StartDateProviderProps) => {
    const [startDate, setStartDate] = useState<Date>(new Date());
    return <StartDateContext.Provider value={{ startDate, setStartDate }}>{children}</StartDateContext.Provider>;
};
