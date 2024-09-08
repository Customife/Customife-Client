import { css } from '@emotion/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { BasicButton } from '../../../Atoms';

interface CategoryBoxProps {
    type: 'readonly' | 'manage';
    name: string;
    colorCode: string;
}

export const CategoryBox = ({ type, name, colorCode }: CategoryBoxProps) => {
    const CategoryBoxStyle = css`
        min-height: 5ex;
        margin-left: 0.5rem;
        padding: 0.5rem;
        border-radius: 10rem;
        background-color: ${colorCode};
    `;

    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/category/${name}`);
    };

    if (type === 'manage') {
        return (
            <div onClick={onClick}>
                <BasicButton type="text" text={name} style={CategoryBoxStyle} />
            </div>
        );
    }
    return (
        <div>
            <BasicButton type="text" text={name} style={CategoryBoxStyle} />
        </div>
    );
};
