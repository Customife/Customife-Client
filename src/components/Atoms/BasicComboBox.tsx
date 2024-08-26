import { JSX } from '@emotion/react/jsx-runtime';
import React from 'react';

interface BasicComboBoxProps {
    name: string;
    list: Array<ListProps>;
}

interface ListProps {
    value: string;
    content: string;
}

export const BasicComboBox = ({ name, list }: BasicComboBoxProps) => {
    const render = () => {
        const result: JSX.Element[] = [];
        list.map((content) => {
            result.push(<option value={content.value}>{content.content}</option>);
        });
        return result;
    };

    return (
        <div>
            <select name={name}>{render()}</select>
        </div>
    );
};
