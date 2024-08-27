import { SerializedStyles } from '@emotion/react';
import { JSX } from '@emotion/react/jsx-runtime';
import React from 'react';

interface BasicComboBoxProps {
    name: string;
    hidden: string;
    list: Array<ListProps>;
    style?: SerializedStyles;
}

interface ListProps {
    value: string;
    content: string;
}

export const BasicComboBox = ({ name, hidden, list, style }: BasicComboBoxProps) => {
    const render = () => {
        const result: JSX.Element[] = [];
        list.map((content) => {
            result.push(<option value={content.value}>{content.content}</option>);
        });
        return result;
    };

    return (
        <div>
            <select name={name} css={style}>
                <option value="" selected disabled hidden>
                    {hidden}
                </option>
                {render()}
            </select>
        </div>
    );
};
