import React from 'react';

import { TitleStyle } from '../../styles';

interface TitleProps {
    name: string;
}

export const Title = ({ name }: TitleProps) => {
    return <h2 css={TitleStyle}>{name}</h2>;
};
