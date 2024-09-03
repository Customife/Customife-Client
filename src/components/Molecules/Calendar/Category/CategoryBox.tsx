import { css } from '@emotion/react';
import React from 'react';

import { BasicButton } from '../../../Atoms';

interface CategoryBoxProps {
    name: string;
    colorCode: string;
}

export const CategoryBox = ({ name, colorCode }: CategoryBoxProps) => {
    const CategoryBoxStyle = css`
        margin-left: 0.5rem;
        padding: 0.5rem;
        border-radius: 10rem;
        background-color: ${colorCode};
    `;

    return (
        <div>
            <BasicButton type="text" text={name} style={CategoryBoxStyle} />
        </div>
    );
};
