import { css } from '@emotion/react';
import styled from '@emotion/styled';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { ChromePicker, ColorResult } from 'react-color';
import { useNavigate, useParams } from 'react-router-dom';

import { CategoryMilestonePageStyle } from '../../../../styles';
import { BasicBox, BasicButton, BasicInput, BasicText } from '../../../Atoms';
import { CategoryBox } from '../../../Molecules';
import { CategoryTitleBar } from '../../../Organisms';

export const CategoryManagePage = () => {
    const { name } = useParams();
    const [categoryName, setCategortName] = useState('');
    const [categoryColor, setCategortColor] = useState('');

    const navigate = useNavigate();

    const ColorCircle = styled.div`
        width: 1rem;
        height: 1rem;

        margin-left: 1rem;

        border: 1px solid;
        border-radius: 50%;
        background-color: ${categoryColor};
    `;

    const [isOpenColorPicker, setOpenColorPicker] = useState(false);

    const changeCategoryName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setCategortName(event.target.value);
    }, []);

    const changeColor = (color: ColorResult) => {
        setCategortColor(color.hex);
    };

    const clickColorCircle = () => {
        setOpenColorPicker(!isOpenColorPicker);
    };

    const closeColorCircle = () => {
        setOpenColorPicker(false);
    };

    axios.interceptors.request.use(
        (config) => {
            config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
            return config;
        },
        (error) => {
            return Promise.reject(error);
        },
    );

    const changeCategoryDetail = async () => {
        const request = {
            name: categoryName,
            colorCode: categoryColor,
        };

        await axios
            .patch(`http://localhost:8080/category/${name}/update`, request)
            .then((response) => {
                console.log(request);
                console.log(response);
                navigate('/category');
            })
            .catch((err) => {
                console.log(request);
                console.log(err);
            });
    };

    useEffect(() => {
        axios
            .get(`http://localhost:8080/category/${name}/detail`)
            .then((response) => {
                setCategortName(response.data.name);
                setCategortColor(response.data.colorCode);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div css={DivBoxStyle}>
            <CategoryTitleBar type="manage" />
            <BasicBox size={'small'} />
            <div css={CategoryMilestonePageStyle}>
                <div css={DivStyle}>
                    <BasicBox size="Xsmall" />
                    <CategoryBox type="readonly" name={categoryName} colorCode={categoryColor} />
                    <BasicBox size="Xsmall" />
                    <div css={BarStyle}>
                        <BasicText size="small">내용</BasicText>
                        <div css={InputDivStyle}>
                            <BasicInput
                                type="text"
                                placeholder="카테고리명"
                                value={categoryName}
                                onChange={changeCategoryName}
                                style={InputStyle}
                            />
                        </div>
                    </div>
                    <BasicBox size="Xsmall" />
                    <div css={[BarStyle, ColorBar]}>
                        <BasicText size="small">색상</BasicText>
                        <div css={[BarStyle, InputDivStyle]}>
                            <ColorCircle onClick={clickColorCircle}></ColorCircle>
                            <div css={ColorBox}>
                                {isOpenColorPicker && (
                                    <>
                                        <div css={cover} onClick={closeColorCircle} />
                                        <ChromePicker color={categoryColor} onChange={changeColor} />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <BasicBox size="small" />
                <div css={ButtonDivStyle}>
                    <BasicButton type="text" text="확인" onClick={changeCategoryDetail} style={buttonStyle} />
                </div>
            </div>
        </div>
    );
};

const DivBoxStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const DivStyle = css`
    margin-left: 1rem;
`;

const BarStyle = css`
    display: flex;
    align-items: center;
`;

const ColorBar = css`
    position: relative;
`;

const ColorBox = css`
    position: absolute;
    top: 130%;
    left: 10%;
`;

const cover = css`
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
`;

const ButtonDivStyle = css`
    display: flex;
    justify-content: center;
`;

const buttonStyle = css`
    width: 80%;
    padding: 0.5rem;
    margin-top: 0.5rem;

    font-weight: bold;

    background-color: #76abae;
    border-style: solid;
    border-width: 1px;
    border-radius: 10px;
`;

const InputDivStyle = css`
    width: 100%;
`;

const InputStyle = css`
    width: 90%;
    height: 2rem;

    margin-left: 1rem;

    border-radius: 10px;
    border: 1px solid;

    &: focus-visible {
        outline: none;
    }
`;
