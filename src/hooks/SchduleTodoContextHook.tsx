import React, { createContext, ReactNode, useContext, useState } from 'react';

interface ScheduleTodoContextProps {
    scheduleOrTodo: string;
    setScheduleOrTodo: (scheduleOrTodo: string) => void;
}

const ScheduleTodoContext = createContext<ScheduleTodoContextProps | undefined>({
    scheduleOrTodo: '',
    setScheduleOrTodo: () => {},
});

export const useScheduleTodoContext = () => {
    const scheduleTodoContext = useContext(ScheduleTodoContext);
    if (!scheduleTodoContext) {
        throw new Error();
    }
    return scheduleTodoContext;
};

interface ScheduleTodoContextProviderProps {
    children: ReactNode;
}

export const ScheduleTodoContextProvider = ({ children }: ScheduleTodoContextProviderProps) => {
    const [scheduleOrTodo, setScheduleOrTodo] = useState<string>('');
    return (
        <ScheduleTodoContext.Provider value={{ scheduleOrTodo, setScheduleOrTodo }}>
            {children}
        </ScheduleTodoContext.Provider>
    );
};
