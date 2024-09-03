import { css } from '@emotion/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import BACK_ICON from '../../../assets/images/Icon/back.png';
import PLUS_ICON from '../../../assets/images/Icon/plus.png';
import { BasicBox, BasicButton, BasicTitle } from '../../Atoms';
import { CategoryBox } from '../../Molecules';

interface Category {
    name: string;
    colorCode: string;
}

export const CategoryPage = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    axios.interceptors.request.use(
        (config) => {
            config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
            return config;
        },
        (error) => {
            return Promise.reject(error);
        },
    );

    const addCategory = async () => {
        const request = {
            name: 'name33',
            colorCode: 'rgb(238, 238, 238)',
        };

        await axios
            .post('http://localhost:8080/category/add', request)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const renderCategories = () => {
        const result: JSX.Element[] = [];
        const data = categories;
        data.map((category, index) => {
            result.push(
                <div key={index}>
                    <BasicBox size="XXsmall" />
                    <CategoryBox name={category.name} colorCode={category.colorCode} />
                </div>,
            );
        });
        return result;
    };

    useEffect(() => {
        axios
            .get('http://localhost:8080/category/get')
            .then((response) => {
                setCategories(response.data);
                console.log(response.data);
                console.log(categories);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div css={DivBoxStyle}>
            <div css={TitleBarStyle}>
                <BasicButton type="image" imageUrl={BACK_ICON}></BasicButton>
                <BasicTitle size="3">카테고리 관리</BasicTitle>
                <BasicButton type="image" imageUrl={PLUS_ICON}></BasicButton>
            </div>
            <BasicBox size={'small'} />
            <div css={CategoryBoxStyle}>{renderCategories()}</div>
        </div>
    );
};

const DivBoxStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TitleBarStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

const CategoryBoxStyle = css`
    border: 1px solid;
    border-radius: 10px;

    width: 60vw;
    height: 80vh;
`;
