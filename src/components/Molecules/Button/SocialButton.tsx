import React from 'react';

import GoogleImageUrl from '../../../assets/images/Social/Google.png';
import KakaoImageUrl from '../../../assets/images/Social/Kakao.png';
import NaverImageUrl from '../../../assets/images/Social/Naver.png';
import { BasicButton } from '../../Atoms';

interface SocialButtonProps {
    name: 'Naver' | 'Kakao' | 'Google';
    imageUrl?: string;
}

const SocialUrl = {
    Google: GoogleImageUrl,
    Kakao: KakaoImageUrl,
    Naver: NaverImageUrl,
};

export const SocialButton = ({ name }: SocialButtonProps) => {
    let ImageUrl = SocialUrl.Google;

    if (name === 'Kakao') {
        ImageUrl = SocialUrl.Kakao;
    }
    if (name === 'Naver') {
        ImageUrl = SocialUrl.Naver;
    }

    return <BasicButton type="image" imageUrl={ImageUrl} text={name} />;
};
