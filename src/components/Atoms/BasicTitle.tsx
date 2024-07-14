import { css } from '@emotion/react';
import React from 'react';

import { CenterComponent } from '../../styles';

interface BasicTitleProps {
    size: '1' | '2' | '3';
    children: React.ReactNode;
}

const TitleSizes = {
    '1': '2.5em',
    '2': '2em',
    '3': '1.5em',
};

export const BasicTitle = ({ size, children }: BasicTitleProps) => {
    const TitleSizeStyle = css`
        font-size: ${TitleSizes[size]};
    `;

    return <h1 css={[CenterComponent, TitleSizeStyle]}>{children}</h1>;
};
