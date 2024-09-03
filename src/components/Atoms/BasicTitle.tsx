import { css, SerializedStyles } from '@emotion/react';
import React from 'react';

import { CenterComponent } from '../../styles';

interface BasicTitleProps {
    size: '1' | '2' | '3' | '4';
    style?: SerializedStyles;
    children: React.ReactNode;
}

const TitleSizes = {
    '1': '2.5em',
    '2': '2em',
    '3': '1.5em',
    '4': '1.2em',
};

export const BasicTitle = ({ size, style, children }: BasicTitleProps) => {
    const TitleSizeStyle = css`
        font-size: ${TitleSizes[size]};
    `;

    return <h1 css={[CenterComponent, TitleSizeStyle, style]}>{children}</h1>;
};
