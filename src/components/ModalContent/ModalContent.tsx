import React from 'react';
import {Space, Typography} from 'antd';
import {useTranslation} from 'react-i18next';

interface ModalContentProps {
    author: string | null;
    url: string;
    content: string | null;
}

const ModalContent: React.FC<ModalContentProps> = ({author, url, content}) => {
    const {t} = useTranslation();

    return (
        <Space direction="vertical">
            <Typography.Title>{t('authorText')} {author || t('noArticleAuthorText')}</Typography.Title>
            <Typography.Paragraph>
                {t('articleAddressURLText')}
                <a href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                </a>
            </Typography.Paragraph>
            <Typography.Paragraph>{t('contentText')} {content || t('articleNoContentText')}</Typography.Paragraph>
        </Space>
    );
};

export default ModalContent;
