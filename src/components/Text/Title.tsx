import { css } from '@emotion/react';
import React from 'react';

import { TitleStyle, CenterComponent } from '../../styles/';

interface TitleProps {
    name: string;
}

export const Title = ({ name }: TitleProps) => {
    return (
        <div css={CenterComponent}>
            <h2 id="logo" css={TitleStyle}>
                {name}
            </h2>
        </div>
    );
};
