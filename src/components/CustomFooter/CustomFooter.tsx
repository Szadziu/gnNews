import React from 'react';
import { Layout, Typography } from 'antd';
import CurrentTime from '../CurrentTime';
import { useArticlesAmountContext } from '../../contexts/ArticlesAmountContext';
import { useTranslation } from 'react-i18next';

const { Footer } = Layout;
const { Text } = Typography;

const CustomFooter: React.FC = () => {
    const {articlesAmount} = useArticlesAmountContext();
    const {t} = useTranslation();

    return (
        <Footer style={footerStyle}>
            <Text strong>{t('articlesAmountText')} {articlesAmount}</Text>
            <CurrentTime />
        </Footer>
    );
};

export default CustomFooter;

const footerStyle: React.CSSProperties = {
    textAlign: 'right',
    backgroundColor: '#7dbcea',
    padding: 16
};