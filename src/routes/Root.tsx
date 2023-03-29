import React, {useEffect} from 'react';
import {Typography} from 'antd';
import { useTranslation } from 'react-i18next';
import {useArticlesAmountContext} from '../contexts/ArticlesAmountContext';

const Root: React.FC = () => {
    const {setArticlesAmount} = useArticlesAmountContext();
    const {t} = useTranslation();

    useEffect(() => {
        setArticlesAmount(0);
    }, []);

    return <Typography.Title style={titleStyle}>{t('rootRouteContentText')}</Typography.Title>;
};

export default Root;

const titleStyle: React.CSSProperties = {
    padding: '2rem',
}
