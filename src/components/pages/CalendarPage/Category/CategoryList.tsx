import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { CategoryMilestonePageStyle } from '../../../../styles';
import { BasicBox } from '../../../Atoms';
import { CategoryBox } from '../../../Molecules';
import { CategoryTitleBar } from '../../../Organisms';

interface Category {
    name: string;
    colorCode: string;
}

export const CategoryList = () => {
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

    const renderCategories = () => {
        const result: JSX.Element[] = [];
        const data = categories;
        data.map((category, index) => {
            result.push(
                <div key={index}>
                    <BasicBox size="XXsmall" />
                    <CategoryBox type="manage" name={category.name} colorCode={category.colorCode} />
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
        <div>
            <CategoryTitleBar type="manage" />
            <BasicBox size={'small'} />
            <div css={CategoryMilestonePageStyle}>{renderCategories()}</div>
        </div>
    );
};
