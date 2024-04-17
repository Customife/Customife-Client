import React from 'react';

import { CenterComponent } from '../../../styles/';
import { BasicDivider, BasicText } from '../../Atoms/';

interface TextDividerProps {
    text: string;
}

export const TextDivider = ({ text }: TextDividerProps) => {
    return (
        <div css={CenterComponent}>
            <BasicDivider width="35%" />
            <BasicText size="Xsmall">{text}</BasicText>
            <BasicDivider width="35%" />
        </div>
    );
};
