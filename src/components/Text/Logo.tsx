import React from 'react';

import { LogoStyle } from '../../styles';

interface LogoProps {
    name: string;
}

export const Logo = ({ name }: LogoProps) => {
    return <h2 css={LogoStyle}>{name}</h2>;
};
