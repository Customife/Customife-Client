import React, { createContext, ReactNode, useContext, useState } from 'react';

interface EndDateContextProps {
    endDate: Date;
    setEndDate: (date: Date) => void;
}

const EndDateContext = createContext<EndDateContextProps | undefined>({
    endDate: new Date(),
    setEndDate: () => {},
});

export const useEndDateContext = () => {
    const endDateContext = useContext(EndDateContext);
    if (!endDateContext) {
        throw new Error();
    }
    return endDateContext;
};

interface EndDateProviderProps {
    children: ReactNode;
}

export const EndDateProvider = ({ children }: EndDateProviderProps) => {
    const [endDate, setEndDate] = useState<Date>(new Date());
    return <EndDateContext.Provider value={{ endDate, setEndDate }}>{children}</EndDateContext.Provider>;
};
