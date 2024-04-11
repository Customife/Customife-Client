import { css } from '@emotion/react';
import React from 'react';

import { TitleStyle, CenterComponent } from '../../styles/';

interface TitleProps {
    name: string;
}

export const Title = ({ name }: TitleProps) => {
    return <h2 css={[CenterComponent, TitleStyle]}>{name}</h2>;
};
